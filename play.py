def sum_nums(n):
    if n == 1:
        return 1
    return n + sum_nums(n - 1)


# print(sum_nums(4))


def fact(n):
    if n == 1:
        return 1
    return n * fact(n - 1)

# print(fact(4))

my_arr = [1,2,3,4,[1,2,3,4,[1,2,3,4]]]

def fib_list(n):
    if n == 0 or n == 1:
        return n
    result = [0,1]
    for i in range(1, n):
        result.append(result[i -1] + result[i])
    return result[-1]

# print(fib_list(40))


def my_fun(n):
    if n == 0 or n == 1:
        return n
    return my_fun(n-1) + my_fun(n-2)

# print(my_fun(40))

def is_palindrome(el):
    is_pali = True 
    temp_str = ''
    for i in range(len(el)-1,-1,-1):
        temp_str += el[i]
    if temp_str != el: is_pali = False
    return is_pali


def recur_pali(str_to_test, num = -1, reversed_str = ''):
    if reversed_str == str_to_test: return True
    if -num == len(str_to_test)+1: return False
    return recur_pali(str_to_test, num-1, reversed_str+str_to_test[num]) 

print(recur_pali('hello')) # returned False
print(recur_pali('cat'))# returned False
print(recur_pali('racecar'))# returned True
print(recur_pali('book'))# returned False
print(recur_pali('mom'))# returned True
print(recur_pali('racecars'))# returned False
print(recur_pali('redivider'))# returned True
print(recur_pali('madam'))# returned True