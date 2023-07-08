import math


def b1():
	m = int(input())
	try:

		if m <=0:
			print("Ошибка m не может быть меньше 0")

		pepe = 1

		for i in range(m):
			pepe *= math.pow(math.cos(i), 2)

		print(pepe)

	except:
		print("ffjdjfd")

def b2():
	m = int(input())
	x = int(input())
	y = int(input())

	try:
		if m <= 0:
			print ("Ошибка, m должно быть положительным")

		pupu = 1
		for i in range(m):
			pupu += math.pow((x*i - y*i), 2)

		print(pupu)

	except: ValueError

def b3():
	lena = int(input("Кол-во элементов послед"))
	lenb = int(input("Кол-во элементов послед"))

	a = [int(input("Введите элементы послед")) for i in range(lena)]
	b = [int(input("Введите элементы послед")) for i in range(lenb)]

	h = 0

	for i in range(lena):
		for j in range(lenb):
			if h <= abs(a[i] - b[j]):
				h = abs(a[i] - b[j])
	print(h)

def b4():
	



