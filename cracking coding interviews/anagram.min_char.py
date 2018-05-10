def number_needed(a, b):
    count = 0; mp = {}
    for i in a:
        if i in mp:
            mp[i] += 1
        else:
            mp[i] = 1
    
    for j in b:
        if j in mp:
            mp[j] -= 1
        else:
            mp[j] = -1
        
    for k, v in mp.items():
        count = count + abs(v)
        
    return count
        

a = input().strip()
b = input().strip()

print(number_needed(a, b))
