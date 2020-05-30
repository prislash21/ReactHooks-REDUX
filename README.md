# useState():

1. This function accepts arguments which is the current state , which will return as a state and a method that capable of updating the state as well.

---

2. useState doesnt automatically merge and update the object, Have to manually merge the value (can be spread oparator).

---

3. In a class component , state is always an object, but with this hook , the state doesn't have to be an object. It can be array, number , bla bla bla ...

4. It returns an array with two element . one is the current value of the state , and the second one is a state setter function. new state value depends on previous state value , you can pass a function to a setter function.

5. when dealing with objects and arrays , make sure you always spread your state variable and then call the setter function.


