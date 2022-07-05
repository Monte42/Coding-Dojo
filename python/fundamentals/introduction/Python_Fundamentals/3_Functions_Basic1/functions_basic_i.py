print(1)
#1
def number_of_food_groups():
    return 5
print(number_of_food_groups())
# Returns "5"

print('\n',2)
#2
def number_of_military_branches():
    return 5
# print(number_of_days_in_a_week_silicon_or_triangle_sides() + number_of_military_branches())
# ERROR number_of_days_in_a_week_silicon_or_triangle_sides expected two arugments
# CORRECTION -- Not defined works only top to bottom
print('error')

print('\n',3)
#3
def number_of_books_on_hold():
    return 5
    return 10
print(number_of_books_on_hold())
# Returns "5"

print('\n',4)
#4
def number_of_fingers():
    return 5
    print(10)
print(number_of_fingers())
#  Returns "5"

print('\n',5)
#5
def number_of_great_lakes():
    print(5)
x = number_of_great_lakes()
print(x)
# Prints "5" then
# X is undefined

print('\n',6)
#6
def add(b,c):
    print(b+c)
# print(add(1,2) + add(2,3))
# Prints "3"
# Prints "5"
# then Error
print('error')

print('\n',7)
#7
def concatenate(b,c):
    return str(b)+str(c)
print(concatenate(2,5))
# returns "25"

print('\n',8)
#8
def number_of_oceans_or_fingers_or_continents():
    b = 100
    print(b)
    if b < 10:
        return 5
    else:
        return 10
    return 7
print(number_of_oceans_or_fingers_or_continents())
# prints 100
# returns 10

print('\n',9)
#9
def number_of_days_in_a_week_silicon_or_triangle_sides(b,c):
    if b<c:
        return 7
    else:
        return 14
    return 3
print(number_of_days_in_a_week_silicon_or_triangle_sides(2,3))
print(number_of_days_in_a_week_silicon_or_triangle_sides(5,3))
print(number_of_days_in_a_week_silicon_or_triangle_sides(2,3) + number_of_days_in_a_week_silicon_or_triangle_sides(5,3))
# returns 7
# returns 14
# returns 21

print('\n',10)
#10
def addition(b,c):
    return b+c
    return 10
print(addition(3,5))
# print 8

print('\n',11)
#11
b = 500
print(b)
def foobar():
    b = 300
    print(b)
print(b)
foobar()
print(b)
# print 500
# print 500
# print 300
# print 500

print('\n',12)
#12
b = 500
print(b)
def foobar():
    b = 300
    print(b)
    return b
print(b)
foobar()
print(b)
# print 500
# print 500
# print 300
# print 500

print('\n',13)
#13
b = 500
print(b)
def foobar():
    b = 300
    print(b)
    return b
print(b)
b=foobar()
print(b)
# print 500
# print 500
# print 300
# print 300

print('\n',14)
#14
def foo():
    print(1)
    bar()
    print(2)
def bar():
    print(3)
foo()
# Print 1
# print 3
# print 2

print('\n',15)
#15
def foo():
    print(1)
    x = bar()
    print(x)
    return 10
def bar():
    print(3)
    return 5
y = foo()
print(y)
# print 1
# print 3
# print 5
# print 10