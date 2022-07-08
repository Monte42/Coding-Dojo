# 1) Update Values in Dictionaries and Lists
x = [ [5,2,3], [10,8,9] ] 
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

x[1][0] = 15
print(x)
students[0]['last_name'] = "Bryant"
print(students)
sports_directory['soccer'][0] = 'Andres'
print(sports_directory)
z[0]['y']=30
print(z,'\n')


# 2) Iterate Through a List of Dictionaries
students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]

def iterateDictionary(student_list):
    for student in student_list:
        print(f"first_name - {student['first_name']}, last_name - {student['last_name']}")
iterateDictionary(students)
print('\n')


# 3) Get Values From a List of Dictionaries
def iterateDictionary2(key_name, student_list):
    for student in student_list:
        print(student[key_name])
iterateDictionary2("first_name",students)
print('')
iterateDictionary2("last_name",students)
print('\n')


# 4) Iterate Through a Dictionary with List Values
dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

def printInfo(school_list):
    for key in school_list.keys():
        print(len(school_list[key]), key.upper())
        for val in school_list[key]:
            print(val)
        print('')
printInfo(dojo)
