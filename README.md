# hoff - Higher Order Function File
[![npm version](https://badge.fury.io/js/hoff.svg)](http://badge.fury.io/js/hoff)
[![travis build information](https://api.travis-ci.org/vinniegarcia/hoff.svg)](https://travis-ci.org/vinniegarcia/hoff)
[![Coverage Status](https://coveralls.io/repos/vinniegarcia/hoff/badge.svg?branch=master)](https://coveralls.io/r/vinniegarcia/hoff?branch=master)

![hoff](http://i.giphy.com/yoJC2KGg8HRgZ2QLbW.gif)

## Overview

Hoff is a collection of higher order functions. I don't really have a goal here other than to show that these high-level functions are really easy to write in ES6. And I thought the name `hoff` would be cool for a library of HOFs so here it is.

## Functions

- `compose` - wraps functions `f(x)` and `g(x)` such that `g(f(x))`.
- `sequence` - wraps functions `f(x)` and `g(x)` such that `f(g(x))`.
- `partial` - partially applies a function `f` with the `arguments` given and returns a function that waits for the remaining arguments.
- `curry` - will return functions until the number of arguments given matches or exceeds the number of arguments in function `f`, then returns the value of the function's execution.
- `identity` - returns a function that returns a stored value. Nothing fancy.
- `not` - returns a function that returns the negation of the function invocation.
- `partition` - Splits an array in two based on a `predicate` function: `[elementsThatMatch, elementsThatDontMatch]`.

## You should write more functions to do __________.

You're absolutely right! [File an issue](https://github.com/vinniegarcia/hoff/issues)!