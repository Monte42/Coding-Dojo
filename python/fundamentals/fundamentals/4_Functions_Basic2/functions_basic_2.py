from pickle import FALSE


def countdown(num):
    arr = []
    i = 5
    while(i>=0):
        arr.append(i)
        i -= 1
    return arr
print(countdown(5), '\n')

def printAndReturn(arr):
    print(arr[0])
    return arr[1]
print(printAndReturn([5,7]), '\n')

def firstPlusLength(arr):
    sum = len(arr)
    sum += arr[0]
    return sum
print(firstPlusLength([3,1,2,9]), '\n')

def valuesGreaterThanSecond(arr):
    greaterThanSecondArr = []
    if len(arr)<=1:
        return False
    else:
        for element in arr:
            if element > arr[1]:
                greaterThanSecondArr.append(element)
        print(len(greaterThanSecondArr))
        return greaterThanSecondArr
print(valuesGreaterThanSecond([3]))
print(valuesGreaterThanSecond([3,4,2,1,5,3,5,6,8,9]), '\n')

def sizeAndValue(size, value):
    arr =[]
    for i in range(size):
        arr.append(value)
    return arr
print(sizeAndValue(4,7))
print(sizeAndValue(6,2))