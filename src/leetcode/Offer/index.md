# 剑指 Offer 专题

## 剑指 Offer 03. 数组中重复的数字

#### 描述

找出数组中重复的数字。

在一个长度为 n 的数组 nums 里的所有数字都在 0 ～ n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

示例 1：

输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3

限制：

2 <= n <= 100000

来源：力扣（LeetCode）
[链接](https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof)

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

#### 题解

<<< @/src/code/array/剑指 Offer 03. 数组中重复的数字.js

## 剑指 Offer 04. 二维数组中的查找

#### 描述

在一个 n \* m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

示例:

现有矩阵 matrix 如下：

```
[
[1, 4, 7, 11, 15],
[2, 5, 8, 12, 19],
[3, 6, 9, 16, 22],
[10, 13, 14, 17, 24],
[18, 21, 23, 26, 30]
]
```

给定 target = 5，返回  true。

给定  target = 20，返回  false。

来源：力扣（LeetCode）
[链接](https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof)

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

#### 题解

<<< @/src/code/array/剑指 Offer 04. 二维数组中的查找.js

## 剑指 Offer 05. 替换空格

#### 描述

请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

示例 1：

```
输入：s = "We are happy."
输出："We%20are%20happy."
```

来源：力扣（LeetCode）
[链接](https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof)

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

#### 题解

<<< @/src/code/string/剑指 Offer 05. 替换空格.js

## 剑指 Offer 06. 从尾到头打印链表

#### 描述

输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

示例 1：

```
输入：head = [1,3,2]
输出：[2,3,1]
```

#### 题解

<<< @/src/code/linked-list/剑指 Offer 06. 从尾到头打印链表.js

## 剑指 Offer 09. 用两个栈实现队列

#### 描述

用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead  操作返回 -1 )

来源：力扣（LeetCode）
(链接)[https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof]
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

#### 题解

<<< @/src/code/array/剑指 Offer 09. 用两个栈实现队列.js

## 剑指 Offer 11. 旋转数组的最小数字

#### 描述

把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组  [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为 1。

示例 1：

```
输入：[3,4,5,1,2]
输出：1
```

来源：力扣（LeetCode）
[链接](https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof)

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

#### 题解

<<< @/src/code/array/剑指 Offer 11. 旋转数组的最小数字.js

## 剑指 Offer 15. 二进制中 1 的个数

#### 描述

> [链接地址](https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/)

编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为 汉明重量).）。

#### 题解

<<< @/src/code/string/剑指 Offer 15. 二进制中 1 的个数.js

## 剑指 Offer 16. 数值的整数次方

#### 描述

实现  pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。不得使用库函数，同时不需要考虑大数问题。

示例 1：

```
输入：x = 2.00000, n = 10
输出：1024.00000
```

来源：力扣（LeetCode）[链接](https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof)

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

#### 题解

<<< @/src/code/number/剑指 Offer 16. 数值的整数次方.js

## 剑指 Offer 17. 打印从 1 到最大的 n 位数

#### 描述

输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。

示例 1:

```
输入: n = 1
输出: [1,2,3,4,5,6,7,8,9]
```

来源：力扣（LeetCode）
[链接](https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof)

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

#### 题解

<<< @/src/code/number/剑指 Offer 17. 打印从 1 到最大的 n 位数.js

## 剑指 Offer 18. 删除链表的节点

#### 描述

给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

返回删除后的链表的头节点。

注意：此题对比原题有改动

示例 1:

```
输入: head = [4,5,1,9], val = 5
输出: [4,1,9]
解释: 给定你链表中值为  5  的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
```

来源：力扣（LeetCode）
[链接](https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof)

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

#### 题解

<<< @/src/code/linked-list/剑指 Offer 18. 删除链表的节点.js

## 剑指 Offer 21. 调整数组顺序使奇数位于偶数前面

#### 描述

输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。

示例：

```
输入：nums = [1,2,3,4]
输出：[1,3,2,4]
注：[3,1,2,4] 也是正确的答案之一。
```

来源：力扣（LeetCode）
[链接](https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof)

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

#### 题解

<<< @/src/code/array/剑指 Offer 21. 调整数组顺序使奇数位于偶数前面.js

## 剑指 Offer 22. 链表中倒数第 k 个节点

#### 描述

输入一个链表，输出该链表中倒数第 k 个节点。为了符合大多数人的习惯，本题从 1 开始计数，即链表的尾节点是倒数第 1 个节点。

例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。

来源：力扣（LeetCode）
[链接](https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof)

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

#### 题解

<<< @/src/code/linked-list/剑指 Offer 22. 链表中倒数第 k 个节点.js

## 剑指 Offer 24. 反转链表

#### 描述

定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL

来源：力扣（LeetCode）
[链接](https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof)

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

#### 题解

<<< @/src/code/linked-list/剑指 Offer 24. 反转链表.js

## 剑指 Offer 25. 合并两个排序的链表

#### 描述

[leetcode](https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/)

输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

```
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```

#### 题解

<<< @/src/code/linked-list/剑指 Offer 25. 合并两个排序的链表.js

## 剑指 Offer 27. 二叉树的镜像

#### 描述

> [leetcode](https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/submissions/)

请完成一个函数，输入一个二叉树，该函数输出它的镜像。

#### 题解

<<< @/src/code/binary-tree/剑指 Offer 27. 二叉树的镜像.js

## 剑指 Offer 28. 对称的二叉树

#### 描述

> [leetcode](https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/)

请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

#### 题解

<<< @/src/code/binary-tree/剑指 Offer 28. 对称的二叉树.js

## 剑指 Offer 29. 顺时针打印矩阵

#### 描述

输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

示例 1：

```
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
```

示例 2：

```
输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
```

来源：力扣（LeetCode）
[链接](https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof)

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

#### 题解

<<< @/src/code/array/剑指 Offer 29. 顺时针打印矩阵.js

## 剑指 Offer 38. 字符串的排列

#### 描述

> [leetcode](https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/)

输入一个字符串，打印出该字符串中字符的所有排列。

你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

#### 题解

<<< @/src/code/string/剑指 Offer 38. 字符串的排列.js

## 剑指 Offer 39. 数组中出现次数超过一半的数字

#### 描述

数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

#### 题解

<<< @/src/code/array/剑指 Offer 39. 数组中出现次数超过一半的数字.js

## 剑指 Offer 40. 最小的 k 个数

#### 描述

> [leetcode](https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/)

输入整数数组 arr ，找出其中最小的 k 个数。例如，输入 4、5、1、6、2、7、3、8 这 8 个数字，则最小的 4 个数字是 1、2、3、4。

#### 题解

<<< @/src/code/array/剑指 Offer 40. 最小的 k 个数.js

## 剑指 Offer 42. 连续子数组的最大和

#### 描述

输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

要求时间复杂度为 O(n)。

#### 题解

<<< @/src/code/array/剑指 Offer 42. 连续子数组的最大和.js

## 剑指 Offer 45. 把数组排成最小的数

#### 描述

> [leetcode](https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/)

输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

#### 题解

<<< @/src/code/array/剑指 Offer 45. 把数组排成最小的数.js

## 剑指 Offer 48. 最长不含重复字符的子字符串

#### 描述

> [leetcode](https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/)

请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

#### 题解

<<< @/src/code/string/剑指 Offer 48. 最长不含重复字符的子字符串.js

## 剑指 Offer 49. 丑数

#### 描述

我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。

示例:

输入: n = 10
输出: 12
解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。

来源：力扣（LeetCode）
[链接](https://leetcode-cn.com/problems/chou-shu-lcof)

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

#### 题解

<<< @/src/code/number/剑指 Offer 49. 丑数.js

## 剑指 Offer 50. 第一个只出现一次的字符

#### 描述

> [leetcode](https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/)

在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

#### 题解

<<< @/src/code/string/剑指 Offer 50. 第一个只出现一次的字符.js

## 剑指 Offer 52. 两个链表的第一个公共节点

#### 描述

[leetcode](https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/)

输入两个链表，找出它们的第一个公共节点。

#### 题解

<<< @/src/code/linked-list/剑指 Offer 52. 两个链表的第一个公共节点.js

## 剑指 Offer 53 - I. 在排序数组中查找数字 I

#### 描述

> [leetcode](https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/)

统计一个数字在排序数组中出现的次数。

#### 题解

<<< @/src/code/array/剑指 Offer 53 - I. 在排序数组中查找数字 I.js

## 剑指 Offer 54. 二叉搜索树的第 k 大节点

#### 描述

> [剑指 Offer 54. 二叉搜索树的第 k 大节点](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/)

给定一棵二叉搜索树，请找出其中第 k 大的节点。

#### 题解

<<< @/src/code/binary-tree/剑指 Offer 54. 二叉搜索树的第 k 大节点.js

## 剑指 Offer 63. 股票的最大利润

####

<<< @/src/code/array/剑指 Offer 63. 股票的最大利润.js

## 剑指 Offer 64. 求 1+2+…+n

#### 题解

<<< @/src/code/number/剑指 Offer 64. 求 1+2+…+n.js

## 剑指 Offer 10- I. 斐波那契数列

#### 描述

> 和跳台阶问题一样

#### 题解

<<< @/src/code/number/剑指 Offer 10- I. 斐波那契数列.js
