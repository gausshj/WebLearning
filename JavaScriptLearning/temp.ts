
//可选参数，必须放在必要参数后
function greeting(firstName: string, lastName?: string) {
    if (lastName) {
        return `Hello ${firstName} ${lastName}!`;
    }
    return `Hello ${firstName}!`;
}
console.log(greeting('QiGe'));
console.log(greeting('QiGe', 'Wang'));
