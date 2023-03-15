SQL> connect system
Enter password:
Connected.
SQL> set serveroutput on verify off;
SQL> declare
  2  a number;
  3  b number;
  4  begin
  5  a:=10;
  6  b:=20;
  7  dbms_output.put_line('the value of a = '|| a);
  8  dbms_output.put_line('the value of b = '|| b);
  9  end;
 10  /
the value of a = 10
the value of b = 20


***************************************************************************************************


SQL> declare
  2  a number;
  3  c number;
  4  b number;
  5  begin
  6  a:=25;
  7  b:=2;
  8  c:=4;
  9  if a>b and a>c then
 10  dbms_output.put_line('a is greater');
 11  end if;
 12  if b>a and b>c then
 13  dbms_output.put_line('b is greater');
 14  end if;
 15  if c>a and c>b then
 16  dbms_output.put_line('c is greater');
 17  end if;
 18  end;
 19  /
a is greater

PL/SQL procedure successfully completed.

SQL>
****************************************************************************************************


SQL> declare
  2  a number;
  3  c number;
  4  b number;
  5  begin
  6  a:=25;
  7  b:=85;
  8  c:=41;
  9  if a>b and a>c then
 10  dbms_output.put_line('a is greater');
 11  end if;
 12  if b>a and b>c then
 13  dbms_output.put_line('b is greater');
 14  end if;
 15  if c>a and c>b then
 16  dbms_output.put_line('c is greater');
 17  end if;
 18  end;
 19  /
b is greater

PL/SQL procedure successfully completed.

SQL>
******************************************************************************************

SQL> declare
  2  a number;
  3  begin
  4  a:=0;
  5  loop
  6  dbms_output.put_line(a);
  7  a:=a+1;
  8  exit when a>6;
  9  end loop;
 10  end;
 11  /
0
1
2
3
4
5
6

PL/SQL procedure successfully completed.

SQL>
*****************************************************************************************
SQL> declare
  2  i number;
  3  begin
  4  i:=0;
  5  while  i<=10
  6  loop
  7  dbms_output.put_line(i);
  8  i:=i+2;
  9  end loop;
 10  end;
 11  /
0
2
4
6
8
10

PL/SQL procedure successfully completed.

SQL>
*******************************************************************************************
SQL> declare
  2  i number;
  3  n number;
  4  fact number;
  5  begin
  6  i:=1;
  7  fact:=1;
  8  n:=&n;
  9  for i IN 1..n
 10  loop
 11  fact:=fact*i;
 12  end loop;
 13  dbms_output.put_line(fact);
 14  end;
 15  /
Enter value for n: 5
120

PL/SQL procedure successfully completed.

SQL>
******************************************************************************************