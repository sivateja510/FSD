import java.util.*;
class Store
{
  private int item_id;
  private String item_name;
  private String item_details;
  private float item_count;
  
  public Store(int item_id,String item_name,String item_details,float item_count)
  {
     this.item_id=item_id;
     this.item_name=item_name;
     this.item_count=item_count;
     this.item_details=item_details;
  }
  public int getItem_id()
  {
     return item_id;
  }
  public String getItem_name()
   {
     return item_name;
   }
  public float getItem_count()
   {
     return item_count;
    }
   public String  getItem_details()
   {
      return item_details;
   }
  public void setItem_count(float count)
   {
      this.item_count+=count;
   }
 }

class Product
{
   final int no_items=10;
   Store items[]=new Store[no_items];
   int i=0;
   public void addItem(Store s)
    {
       items[i]=s;
       i++;
    }     
   public void viewAllproductDetails()
   {
       System.out.println("Item No \t Item Name \t\t Item details \t item count");
       for(int j=0;j<i;j++)
       {
          System.out.println(items[j].getItem_id()+"\t\t"+items[j].getItem_name()+"\t\t"+items[j].getItem_details()+"\t"+items[j].getItem_count());

       }
   }
   public void Add(int item_id,float item_count)
    {
       for(int j=0;j<i;j++)
        {
           if(items[j].getItem_id()==item_id)
                {
                     items[j].setItem_count(items[j].getItem_count()+item_count);
                     return;
                 }
        }
        System.out.println("Invalid item Number");
    }
    public void delete(int item_id)
    {
       for(int j=0;j<i;j++)
        {
           if(items[j].getItem_id()==item_id)
                {
                     items[j].setItem_count(0);
                     return;
                 }
        }
        System.out.println("Invalid item Number");
    }
    public void printdetail(int item_id)
    {
       for(int j=0;j<i;j++)
        {
           if(items[j].getItem_id()==item_id)
                {
                     System.out.println("Item No \t Item Name \t\t Item details \t item count");
                     System.out.println(items[j].getItem_id()+"\t\t"+items[j].getItem_name()+"\t\t"+items[j].getItem_details()+"\t"+items[j].getItem_count());
                     return;
                 }
        }
        System.out.println("Invalid item Number");
    }
}
class Assign4
{
  public static void main(String args[])
   {
        Product c=new Product();
        Store a;
        int id,ch;
        String name,details;
        float cnt;
        Scanner sc=new Scanner(System.in);
        while(true)
        {
           System.out.println("1.Add Items \n 2.View Items \n 3.item count \n 4.item details \n 5.Delete item \n 6.Exit");
           ch=sc.nextInt();
           switch(ch)
           {
             case 1:
                     id=sc.nextInt();
                     sc.nextLine();
                     name=sc.nextLine();
                     cnt=sc.nextFloat();
                     sc.nextLine();
                     details=sc.nextLine();
                     //sc.nextLine();
                     a=new Store(id,name,details,cnt);
                     c.addItem(a);
                     break;
             case 2:
                     c.viewAllproductDetails();
                      break;
             case 3:
                     id=sc.nextInt();
                     cnt=sc.nextFloat();
		               c.Add(id,cnt);
                     break;
             case 4:
                     id=sc.nextInt();
                     c.printdetail(id);
                     break;
             case 5:
                     //sc.nextLine();
                     id=sc.nextInt();
                     sc.nextLine();
                     c.delete(id);
                     break;
             case 6:
                     System.exit(0);
           }
         }

   }
}
