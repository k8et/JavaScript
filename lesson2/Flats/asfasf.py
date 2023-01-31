import random
a = random.randint(1,10)
b = random.randint(1,10)
c = random.randint(1,10)
print (a, " ", b, " ", c)
if (a == b) and (a == c) and (b == c):
    print ("Вы выйграли")
else:
    print ("Проигрыш")z