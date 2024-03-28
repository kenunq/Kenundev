from unittest.mock import patch

from django.test import TestCase
from django.urls import reverse

from user.forms import PasswordChangeForm, PasswordResetCustomForm, UserLoginForm, UserRegistrationForm
from user.models import User


# Create your tests here.


class Test_UsersViews(TestCase):
    @classmethod
    def setUp(cls):
        cls.registration_form_data = {
            "username": "testusername",
            "password1": "testpassword",
            "password2": "testpassword",
            "email": "testemail@yandex.ru",
            "captcha": "PASSED",
            "terms_of_use": True,
        }

        cls.login_form_data = {
            "username": "user1",
            "password": "user1",
            "remember_me": True,
        }
        cls.user1 = User.objects.create_user(
            username=cls.login_form_data["username"],
            password=cls.login_form_data["password"],
            email="testemail2@yandex.ru",
        )

        cls.change_password_data = {
            "old_password": cls.login_form_data["password"],
            "new_password1": "qwertyQAZWSX123.",
            "new_password2": "qwertyQAZWSX123.",
        }

        cls.fake_change_password_data = {
            "old_password": "fake_password",
            "new_password1": "qwertyQAZWSX123.",
            "new_password2": "qwertyQAZWSX123.",
        }

    def test_registration_status(self):
        response = self.client.get(reverse("user:registration"))
        self.assertEquals(response.status_code, 200)

    @patch("django_recaptcha.fields.ReCaptchaField.validate")  # валидация капчи
    def test_registration_form(self, validate_method):
        form = UserRegistrationForm(data=self.registration_form_data)
        validate_method.return_value = True
        self.assertTrue(form.is_valid())  # форма валидна

    @patch("django_recaptcha.fields.ReCaptchaField.validate")  # валидация капчи
    def test_registration_view(self, validate_method):
        response = self.client.post(reverse("user:registration"), self.registration_form_data)
        validate_method.return_value = True
        self.assertEquals(response.status_code, 302)
        self.assertEquals(response.url, "/")  # Регистрация прошла успешно

    def test_terms_of_use_status(self):
        response = self.client.get(reverse("user:terms-of-use"))
        self.assertEquals(response.status_code, 200)

    def test_login_status(self):
        response = self.client.get(reverse("user:login"))
        self.assertEquals(response.status_code, 200)

    def test_login_form(self):
        form = UserLoginForm(data=self.login_form_data)
        self.assertTrue(form.is_valid())

    def test_login_view(self):
        response = self.client.post(reverse("user:login"), self.login_form_data, follow=True)
        self.assertTrue(response.context["user"].is_active)
        self.assertTemplateUsed(response, "HomePage/HomePage.html")
        self.assertTrue(response.client.cookies.get("sessionid").get("expires"))

    def test_reset_pass_status(self):
        response = self.client.get(reverse("user:reset_password"))
        self.assertEquals(response.status_code, 200)

    def test_reset_pass_form(self):
        form = PasswordResetCustomForm(data={"email": "testemail2@yandex.ru"})
        self.assertTrue(form.is_valid())

        form = PasswordResetCustomForm(data={"email": "uncurrent@yandex.ru"})
        self.assertFalse(form.is_valid())  # Не существует аккаунта с такой почтой

        form = PasswordResetCustomForm(data={"email": "uncurrent@"})
        self.assertFalse(form.is_valid())  # Не верный формат почты

    def test_reset_pass_view(self):
        response = self.client.post(reverse("user:reset_password"), {"email": "testemail2@yandex.ru"})
        self.assertEquals(response.status_code, 302)  # письмо для сброса пароля отправлено

    def test_profile_status(self):
        response = self.client.get(reverse("user:profile"))
        self.assertEquals(response.status_code, 302)  # незарегистрированного пользователя перенаправит на страницу
        # входа

        self.assertTrue(
            self.client.login(
                username=self.login_form_data["username"],
                password=self.login_form_data["password"],
            )
        )
        response = self.client.get(reverse("user:profile"))
        self.assertEquals(response.status_code, 200)

    def test_profile_form(self):
        self.assertTrue(
            self.client.login(
                username=self.login_form_data["username"],
                password=self.login_form_data["password"],
            )
        )
        form = PasswordChangeForm(user=self.user1, data=self.change_password_data)
        self.assertTrue(form.is_valid())

        form = PasswordChangeForm(user=self.user1, data=self.fake_change_password_data)
        self.assertFalse(form.is_valid())  # Пароль не является действительным

    def test_profile_view(self):
        self.assertTrue(
            self.client.login(
                username=self.login_form_data["username"],
                password=self.login_form_data["password"],
            )
        )
        response = self.client.post(
            reverse("user:profile"),
            {"update_email": "testemail2@yandex.ru"},
            "application/json",
        )
        self.assertEquals(response.status_code, 200)
        self.assertIn("the specified mailing address is already in use", response.content.decode())  # указанная
        # электронная почта уже используется

        response = self.client.post(
            reverse("user:profile"),
            {"update_email": "testemail1@yandex.ru"},
            "application/json",
        )
        self.assertEquals(response.status_code, 200)
        self.assertIn("email details were successfully updated", response.content.decode())  # на действующую
        # элеткронную почту отправленно письмо с подтверждением

        response = self.client.post(
            reverse("user:profile"),
            {"update_discord": "testdiscord"},
            "application/json",
        )
        self.assertIn("data was successfully discrod updated", response.content.decode())  # дискорд успешно обновлен

    def test_logout_view(self):
        response = self.client.get(reverse("user:logout"))
        self.assertEquals(response.status_code, 403)  # Пользователь не авторизирован

        self.assertTrue(
            self.client.login(
                username=self.login_form_data["username"],
                password=self.login_form_data["password"],
            )
        )
        response = self.client.get(reverse("user:logout"))
        self.assertEquals(response.status_code, 302)  # пользователь успешно деавторизировался
