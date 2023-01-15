from email.policy import default


txt = "one Two three two Three four five one six Four the and that good boy that the"

def create_dict_from_string(txt):
    dict = {}
    for each in txt.split():
        # dict[each] += 1 if each in dict else dict[each] = 1
        each = each.lower()
        if each in dict:
            dict[each] += 1
        else:
            dict[each] = 1
    return dict

# print(create_dict_from_string(txt))







# x = create_dict_from_string(txt)
# print(x.get('nine', 1))
# print(x)


# x = 11

# print('yes') if x == 1 else print('no')



# cols is default empty str so its only needed if you creating an instance that isnt utilizing every column
def generate_save_query(table, vals, cols=None):
    return f'INSERT INTO {table} {cols} VALUES {vals};' if cols else f'INSERT INTO {table} VALUES {vals};'


# Then I would do something  with update
def gen_update(table,updateDict,id):
    query = f"UPDATE {table} SET"
    for key in updateDict:
        query += f' {key} = {updateDict[key]},'
    return query[:-1] + f' WHERE id = {id};'



print(generate_save_query('bikes',(2004, 'Kawi', 'ZX6R', '636cc')))
# INSERT INTO bikes VALUES (2004, 'Kawi', 'ZX6R', '636cc');
print(generate_save_query('bikes',(2001, 'Yamaha', 'R1'),('year','make','model')))
# INSERT INTO bikes ('year', 'make', 'model') VALUES (2001, 'Yamaha', 'R1');
print(gen_update('bikes',{'year':2008, 'make':'honda', 'model':'CBR600'},22))
# UPDATE bikes SET year = 2008, make = honda, model = CBR600 WHERE id = 22;