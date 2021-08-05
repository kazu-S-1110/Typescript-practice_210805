/* eslint-disable @typescript-eslint/no-unused-vars */

// Typescriptの基本の型

//boolean
let bool: boolean = true;

//number
let num: number = 36;

//string
let str: string = "hogehoge";

// Array 2pattern
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2, 3];

// tuple
let tuple: [number, string] = [1, "a"];

// any
let any1: any = "なんでもおけだから避けるべき型";

// void:何も返却しないことを表す
const funcA = (): void => {
  const test = "test";
};

//null
let null1: null = null;

// undefined
let undef1: undefined = undefined;

// object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 3, name: "sagesage" };
