nums = input()

numList = nums.split(' ')

num = 0
for i in numList:
    num += int(i)

print(num)