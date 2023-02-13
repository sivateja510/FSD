import java.util.*;
import java.util.Collections;
class Node {
    int data;
    Node next;

    public Node(int data) {
        this.data = data;
        this.next = null;
    }
}

class Rmd
{
    static Scanner sc=new Scanner(System.in);
    static Node create(int n)
    {
        Node head=null;
        for(int i=0;i<n;i++)
        {
            Node j=new Node(sc.nextInt());
            if(head==null)
            {
                head=j;
            }
            else
            {
                Node p=head;
                while(p.next!=null)
                {
                    p=p.next;
                }
                p.next=j;
            }
        }
        return head;
    }
    public static Node removeduplicate(Node t)
    {
        Node temp=t;
        while(temp!=null && temp.next!=null)
        {
            if(temp.data==temp.next.data)
            {
                temp.next=temp.next.next;
            }
            else
            {
                temp=temp.next;
            }
            
        }
        Node he=t;
        while(he!=null)
        {
            he=he.next;
        }
        return t;
    }
   
    public static void print(Node head)
    {
        Node temp=head;
        while(temp!=null)
        {
            System.out.print(temp.data+" ");
            temp=temp.next;
        }
        System.out.print("\n");
    }
    public static void main(String args[])
    {
        System.out.print("enter the linked list size");
        int n=sc.nextInt();
        System.out.print("enter the elements of linked list in sorted order only");
        Node head1=create(n);
        print(head1);
        Node finall=removeduplicate(head1);   
        print(finall);
        
    }
}
