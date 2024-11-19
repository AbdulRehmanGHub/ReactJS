## Props Drilling

<p>
props drilling is a props passing problem. We know that we can pass props from one component to another which is a use of props but if there are many components and we need to pass the props from top level component in our bottom or lowest level component. Let's say there are 5 components. So, in this case we will pass and use props in 4th component, then 3rd, then 2nd and at last we will pass it in our required 1st component.
</p>

<p>
So, this is very illogical and also complex to pass props like that. This will take so much time and memory in every component. To fix this issue <b>React introduced the useContext</b> hook in which useContext do all the things for us. Like we need to declare props in 5th components just like before but this time with the help of useContext, we can simply and directly use it in our required 1st component.
</p>

<p>
Example: I'm from Abbottabd city. If I want to send a parcel/gift to my friend living in Karachi. I handed over the parcel to my relative who are travelling by Bus to Karachi but they'll also have to visit more cities in their way for some days and then they will reach to Karachi and then after that give the parcel/gift to my friend. <br>
This method will work, but there are so much complexities. Right. <br>

Now, there is another method that I visit the courier service and then send the parcel/gift to my friend directly.
There is no complexity involved. So, we can consider this situation as we used useContext in this case.
</p>
