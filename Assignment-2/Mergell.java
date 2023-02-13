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

class Mergell
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
    public static Node merge(Node h1,Node h2)
    {
        Node head=null;
        ArrayList<Integer>li=new ArrayList<>();
        Node t1=h1;
        Node t2=h2;
        while(t1!=null)
        {
            li.add(t1.data);
            t1=t1.next;
        }
        while(t2!=null)
        {
            li.add(t2.data);
            t2=t2.next;
        }
        Collections.sort(li);
        for(int i=0;i<li.size();i++)
        {
            Node j=new Node(li.get(i));
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
        System.out.print("enter the first linked list size");
        int n=sc.nextInt();
        System.out.print("enter the elements of linked list");
        Node head1=create(n);
        System.out.print("enter the second linked list size");
        int n1=sc.nextInt();
        System.out.print("enter the elements of linked list");
        Node head2=create(n1);
        print(head1);    
        print(head2);    
        Node mhead=merge(head1,head2);
        System.out.print("sorted data");
        print(mhead);      
        
    }
}