import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Flutter Layouts'),          
        ),
        body: Center(
          // child: Column( // Alinha verticalmente as imagens
          child: Row( // Alinha horizontalmente as imagens
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              Image.asset('images/lands_01.jpg'),
              Image.asset('images/lands_02.jpg'),
              Image.asset('images/lands_03.jpg'),
            ],
          )
        ),
      ),
    );
  }
}
