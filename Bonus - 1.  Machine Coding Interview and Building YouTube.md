## Bonus - 1. Machine Coding Interview and Building YouTube

1. requirements
2. Features
3. Tech Stack (front end stack)
   => react & react dom
   => (uilayer -> tailwindcss)
   => (datalayer -> redux => state management)
   => routing -> react-router-dom
   => bundler ->
   => test -> jest

## planing 5 m

## @redux toolkit => store setup

1. created a store ({}) -> @reduxtoolkit
2. ceate a slice ({}) -> @reduxtoolkit
3. use slice inside store in reducer object
4. export and import store on app level

## @react-redux using reducers react redux => subscribed

5. use => useDispatch() to dispatch the reducer
6. use that reducer on the slidebar using => useSelector()

## roadmap

1. while doing jsx first do single then use map to scale
2. make it work it for one .. then scale it
3. while passing props first just console it
4.

# higher order

take a existing componet and retuening the modification of component

# Debouncing

typing slow = 200ms
typing fast = 30ms

Peformance:

- iphone pro max = 14 \* 1000 = 140000
- iphone pro max = 3 \* 1000 = 3000

Debouncing with 200ms

- if the api key is diffence between 2 key strokes is <200ms dont make api call
- if >200ms make api call

1. whenever the state value is changes its trigger re-concillation architect and react render the component

## home work

1. URLSearchParams

# Cache:

time complexity tro search in array = 0(n)
time complexity tro search in array = 0(1)

## Bonus - 3. Wrapping up YouTube Project

challenges:- - get data live (data layer) - update the ui (ui layer)

there are two ways to established a live data

## web sockets example: (messager) or (trading apps)

--> web sockets (ui) ui layer <-------> (dl) data layer
--> bi directional data flow either server or brower send or receive data
--> no regular interval

## api polling or long polling example: (gmail) or (crick buzz)

--> server sending data to the ui after 10 sec or 20 sec delay
--> regualr interval

## redux flow

# @redux/toolkit

1. create a slice
2. use inside the store
3. check usin rdux toolkit extension

# react-redux

4. first dispatch
5. then subscribe
   => whatever we dispatching (useDispatch) we using in teh selector (useSelector)

## Bonus - 4. useMemo, useCallback, useRef Hooks

useMemo => useMemo is a React Hook that lets you cache the result of a calculation between re-renders.

const cachedValue = useMemo(callbackfunction, dependencies)
const cachedValue = useMemo(() => {someFunc(someVal), [sometext]})

useCallback() => useCallback is a React Hook that lets you cache a function definition between re-renders.
cosnt cachedFunc = useCallback(fn, depencies)
const cachedFunc = useCallback(someFunc, [sometext])

useRef() => useRef is a React Hook that lets you reference a value that’s not needed for rendering.[performance_optimization]
const ref = useRef(initialValue)
const ref = useRef(some state variable)

## normal javascript variale its updataing behing the scenes while the componet rernder it the memory its just wiped out

## while using ref the value is persist behind the scenes and its not rerendering

## while using useState() the state value and other persisted (useRef) is updated

# useRef() is syncing wiht state
