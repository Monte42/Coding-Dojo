num1 = 42 # Variable declaration, Number/Integer 
num2 = 2.3 # Variable declaration, Number/Float
boolean = True # Variable declaration, Boolean
string = 'Hello World' # Variable declaration, Sting
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] # Variable declaration, List
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} # Variable declaration, Dictionary
fruit = ('blueberry', 'strawberry', 'banana') # Variable declaration, Tuple - Inmutable
print(type(fruit)) # Printing the data strcuture of fruit - Tuple
print(pizza_toppings[1]) # Printing the index of 1 from pizza_toppings - "Sausage"
pizza_toppings.append('Mushrooms') # Adding "Mushrooms" to the end of the pizza_toppings list
print(person['name']) # Calling the name property for the person dictionary = "John"
person['name'] = 'George' # Changing the name property of the person dictionary from "John" to "George"
person['eye_color'] = 'blue' # Adding the eye-color property to the person dictionary with the value of "blue:
print(fruit[2]) # Printing the index of 2 from the tuple "fruit" - "banana"

if num1 > 45: # Conditional "if else" statement - Checking if num is larger than 45
    print("It's greater")  # num is not larger - This will not print
else:
    print("It's lower") # num is smaller - this will print

if len(string) < 5: # Condidtional "if elif(else if) else" statement
    print("It's a short word!") #string is 11 charaters long - greater than 5 - will not print
elif len(string) > 15:
    print("It's a long word!")#string is 11 charaters long - less than 15 - will not print
else:
    print("Just right!") #string is 11 charaters long - this will print

for x in range(5): # for loop - will run as long as x is less than 5 - x starting at 0 
    print(x) # log 0,1,2,3,4
for x in range(2,5): # for loop - will run as long as x is less than 5 - x starting at 2
    print(x) # log 2,3,4
for x in range(2,10,3): # for loop - will run as long as x is less than 10 - x starting at 2 - x will step by 3
    print(x) # log 2,5,8

x = 0 # Variable declaration, Number/Integer
while(x < 5): # while loop - continues to run until condition is met
    print(x) # prints value of x
    x += 1 # add 1 to x, eventaully closing the loop

pizza_toppings.pop() # removes the last element from the list pizza_toppings
pizza_toppings.pop(1) # removes the element with the index of 1 from the list pizza_toppings

print(person) # returns {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False, 'eye_color': 'blue'}
person.pop('eye_color') # removes "eye_color" property
print(person) # returns {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False}

for topping in pizza_toppings: # prints every topping in the pizza_toping list
    if topping == 'Pepperoni': # check if topping is "Pepperoni"
        continue # Simply continues to the next line of code
    print('After 1st if statement') # prints after the first condtional statment everytime it runs
    if topping == 'Olives': # runs after first if statement and print method - if topping is "Olives" it breaks out of the loop
        break

def print_hello_ten_times(): # funtion declaration
    for num in range(10): # for loop to run run 10 times total
        print('Hello') # prints "Hello"

print_hello_ten_times() # prints "Hello" 10 times

def print_hello_x_times(x): # funtion declaration, parameter not defined and will be required to run
    for num in range(x): # will run x value amount of times
        print('Hello') # prints "Hello"

print_hello_x_times(4)  # prints "Hello" 4 times

def print_hello_x_or_ten_times(x = 10): # funtion declaration, parameter defined and will not be required to run
    for num in range(x): # will run 10 or x value amount of times - if x is defined it will always run x value
        print('Hello') # prints "Hello"

print_hello_x_or_ten_times() # prints "Hello" 10 times
print_hello_x_or_ten_times(4) # prints "Hello" 4 times


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)