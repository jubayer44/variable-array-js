
// Problem-1---- ক্লাস সেভের এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়েছ। তোমার বন্ধু আলিয়া, ডালিয়া, সালিয়া, মালিয়া, লিলিয়া আর জ্বালাইয়া - তাদের grade তুমি জানো না। তবে তাদের নম্বর জানো. আলিয়া 95 পেয়েছে, ডালিয়া 66 পেয়েছে, সালিয়া 80 পেয়েছে, মালিয়া পেয়েছে 59, লিলিয়া পেয়েছে 47, জ্বালাইয়া পেয়েছে 77। তুমি JS code দিয়ে তাদের grade বের করে দিতে পারবে?

// ১) যারা ৫০ এর নিচে পেয়েছে, তাদের grade F.
// ২) যারা ৫০ বা তার উপরে পেয়েছে, অথবা ৬০ এর নিচে পেয়েছে, তাদের grade D.
// ৩) যারা ৬০ বা তার উপরে পেয়েছে, অথবা ৭০ এর নিচে পেয়েছে, তাদের grade C.
// ৪) যারা ৭০ বা তার উপরে পেয়েছে, অথবা ৮০ এর নিচে পেয়েছে, তাদের grade B.
// ৫) যারা ৮০ বা তার উপরে পেয়েছে, অথবা ৯০ এর নিচে পেয়েছে, তাদের grade A.
// ৬) যারা ৯০ বা তার উপরে পেয়েছে, তাদের grade A+.

// Problem-2---(তাড়াহুড়া করে স্কুলের জন্য বের হচ্ছ কিন্তু রাস্তা পার হওয়ার সময় দেখলে, ট্রাফিক সিগন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চেষ্টা কর, তাহলে ডেঞ্জার হতে পারে। যদি হলুদ রং হয় তাহলে তোমার থেমে যাওয়া উচিত। আর যদি ট্রাফিক সিগন্যাল গ্রিন হয় তাহলে তোমার রাস্তা পার হওয়া উচিত। তাই একটা কোড লিখে ফেলো। যেখানে আমরা signal নামে একটা ভেরিয়েবল থাকবে। সেটার মান green, yellow বা red হতে পারে। সেই অনুসারে ডিফারেন্ট ডিফারেন্ট কাজ হবে। তো, সেই কোড ফটাফট লিখে ফেলো। )

var alia = 95;
var dalia = 66;
var salia = 80;
var malia = 59;
var liliya = 47;
var jalaia = 77;
var kalia = 43;
// ----------------------------------
if(alia >= 90){
    console.log('A+')
}
else if(alia >= 80){
    console.log('A')
}
else if(alia >= 70){
    console.log('B')
}
else if(alia >= 60){
    console.log('C')
}
else if(alia >= 50){
    console.log('D')
}
else if(alia < 50){
    console.log('F')
}
// ---------------------------------
if(dalia >= 90){
    console.log('A+')
}
else if(dalia >= 80){
    console.log('A')
}
else if(dalia >= 70){
    console.log('B')
}
else if(dalia >= 60){
    console.log('C')
}
else if(dalia >= 50){
    console.log('D')
}
else if(dalia < 50){
    console.log('F')
}
// ---------------------------------
if(salia >= 90){
    console.log('A+')
}
else if(salia >= 80){
    console.log('A')
}
else if(salia >= 70){
    console.log('B')
}
else if(salia >= 60){
    console.log('C')
}
else if(salia >= 50){
    console.log('D')
}
else if(salia < 50){
    console.log('F')
}
// --------------------------------
if(malia >= 90){
    console.log('A+')
}
else if(malia >= 80){
    console.log('A')
}
else if(malia >= 70){
    console.log('B')
}
else if(malia >= 60){
    console.log('C')
}
else if(malia >= 50){
    console.log('D')
}
else if(malia < 50){
    console.log('F')
}
// ---------------------------------
if(liliya >= 90){
    console.log('A+')
}
else if(liliya >= 80){
    console.log('A')
}
else if(liliya >= 70){
    console.log('B')
}
else if(liliya >= 60){
    console.log('C')
}
else if(liliya >= 50){
    console.log('D')
}
else if(liliya < 50){
    console.log('F')
}
// -----------------------------
if(jalaia >= 90){
    console.log('A+')
}
else if(jalaia >= 80){
    console.log('A')
}
else if(jalaia >= 70){
    console.log('B')
}
else if(jalaia >= 60){
    console.log('C')
}
else if(jalaia >= 50){
    console.log('D')
}
else if(jalaia < 50){
    console.log('F')
}
// ----------------------------------
if(kalia >= 90){
    console.log('A+')
}
else if(kalia >= 80){
    console.log('A')
}
else if(kalia >= 70){
    console.log('B')
}
else if(kalia >= 60){
    console.log('C')
}
else if(kalia >= 50){
    console.log('D')
}
else if(kalia < 50){
    console.log('F')
}
// ==========================================

var signal = 'red';

if(signal == 'red'){
    console.log('Danger');
}
else if(signal == 'green'){
    console.log('Go');
}
else if(signal == 'yellow'){
    console.log('Wait');
}
// ================================