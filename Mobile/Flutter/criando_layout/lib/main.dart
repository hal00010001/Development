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
        body: Column(
          children: [
            Center(
              heightFactor: 2,
              child: Text(
                'Olá Mundo!',
                textDirection: TextDirection.ltr,
                style: TextStyle(
                  fontSize: 32,
                  color: Colors.greenAccent,
                )
              )
            )
          ],
        ),
      ),
    );
  }
}
