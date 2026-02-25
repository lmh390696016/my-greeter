# 思考内容

## 我选择python版本并重写为ts，我认为这个单元测试存在问题

1. 测试类名TestStringMethods指向不明，应修改为MyGreeterTest，具体在我的测试文件中describe("MyGreeterTest")所表现

2. 断言没有覆盖代码所有情况，应该分别测试三种条件并判断返回值是否准确，具体体现在我的测试文件myGreeter.test.ts中所标注的case