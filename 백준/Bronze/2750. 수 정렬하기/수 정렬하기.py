res = []
cnt = int(input())
if cnt < 0 or cnt > 1000:
    exit()

while cnt > 0:
    num = int(input())
    if num <= 1000:
        res.append(num)
    cnt -= 1

res.sort()

for i in res:
    print(i)