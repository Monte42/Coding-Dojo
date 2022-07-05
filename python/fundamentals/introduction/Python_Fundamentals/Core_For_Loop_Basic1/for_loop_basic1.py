# 1) Basic
for i in range(151):
    print(i)
print("")

# 2) Multiples of five
for i in range(5,1001,5):
    print(i)
print("")

# 3) Counting, the Dojo way
for i in range(1,101):
    if i % 10 == 0:
        print("Coding Dojo")
    elif i % 5 == 0:
        print("Coding")
    else:
        print(i)
print("")

# 4) Whoa, that sucker's huge
i=0
sum = 0
while i <= 500000:
    if i %2 != 0:
        sum += i
    i += 1
print("")

# 5) Countdown by fours
i = 2018
while i > 0:
    print(i)
    i -= 4
print("")

# 6) Flexible Counter
lowNum = 2
highNum = 9
mult = 3
for i in range(lowNum,highNum+1):
    if i % mult == 0:
        print(i)