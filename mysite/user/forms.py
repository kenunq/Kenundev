from django import forms
from django.contrib.auth.forms import (AuthenticationForm, UserChangeForm,
                                       UserCreationForm)
from django_recaptcha import widgets

from user.models import User

from django_recaptcha.fields import ReCaptchaField


class UserRegistrationForm(UserCreationForm):
    username = forms.CharField(widget=forms.TextInput(
        attrs={
        'id': 'input-login'
        }))

    password1 = forms.CharField(widget=forms.PasswordInput({
        'id': 'input-password',
        'autocomplete': "new-password"
    }))
    password2 = forms.CharField(widget=forms.PasswordInput({
        'id': 'input-repeat-password'
    }))
    email = forms.CharField(widget=forms.EmailInput(attrs={
        'id': 'input-email'
    }))
    captcha = ReCaptchaField(widget=widgets.ReCaptchaV2Checkbox(
        attrs={
            'data-theme': 'light',
            'id': 'RecaptchaField1',
            'data-callback': 'verifyCallback',
            'style': "margin: 0px 25px 26px 25px;"
        }
    ))

    class Meta:
        model = User
        fields = ('username', 'password1', 'password2', 'email')

    def save(self, commit=True):
        user = super(UserRegistrationForm, self).save(commit=True)
        return user


class UserLoginForm(AuthenticationForm):
    username = forms.CharField(widget=forms.TextInput(attrs={
        'id': 'input-login'
    }))
    password = forms.CharField(widget=forms.PasswordInput({
        'id': 'input-password',
        'readonly': None,
        'onfocus': "this.removeAttribute('readonly')"
    }))

    class Meta:
        model = User
        fields = ('username', 'password')
