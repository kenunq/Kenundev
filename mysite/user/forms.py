from django import forms
from django.contrib.auth.forms import (AuthenticationForm, UserChangeForm,
                                       UserCreationForm)

from user.models import User


class UserRegistrationForm(UserCreationForm):
	username = forms.CharField(widget=forms.TextInput(attrs={
		'id': 'input-login'}))
	password1 = forms.CharField(widget=forms.PasswordInput({
		'id': 'input-password'}))
	password2 = forms.CharField(widget=forms.PasswordInput({
		'id': 'input-repeat-password'}))
	email = forms.CharField(widget=forms.EmailInput(attrs={
		'id': 'input-email'}))

	class Meta:
		model = User
		fields = ('username', 'password1', 'password2', 'email')

	def save(self, commit=True):
		user = super(UserRegistrationForm, self).save(commit=True)
		return user

class UserLoginForm(AuthenticationForm):
	username = forms.CharField(widget=forms.TextInput(attrs={
		'id': 'input-login'}))
	password = forms.CharField(widget=forms.PasswordInput({
		'id': 'input-password'}))

	class Meta:
		model = User
		fields = ('username', 'password')
