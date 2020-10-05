# Caesar cipher CLI tool

Приложние для шифрования цезарем.

Для работы необходимо прописать в консоли npm install, если этого еще не было сделано

# Использование в консоли

node CS.js -a encode -s 7 -i "./input.txt" -o "./output.txt"

Вместо "./input.txt" "./output.txt" могут быть адреса необходимых вам файлов

   Возможности:
    - -a, --action [type],     an action encode/decode
    - -s, --shift <number>     a shift
    - -i, --input <filename>   an input file
    - -o, --output <filename>  an output file

    -a (encode/decode) опция кодирования/декодирования
    -s (цифра) cvtotybt obahjdfybz
    -i файл из которого будут браться данные (необязательная опция)
    -o файл в который будут записыватсья данные  (необязательная опция)

# Пример использования 

node CS.js -a encode -s 7 -i "./input.txt" -o "./output.txt"


> input.txt:

> ABC abc 123 /*- АБВ абв

> output.txt:

> ZAB zab 123 /*- АБВ абв\
