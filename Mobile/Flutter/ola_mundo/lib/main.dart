import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

void main() {
  runApp(MaterialApp(
    home: MyButton(),
  ));
}

class MyButton extends StatefulWidget {
  @override
  MyButtonState createState(){
    return MyButtonState();
  }
}

class MyButtonState extends State<MyButton> {
  
  int counter = 0;
  List<String> strings = ['Flutter', 'é', 'legal', 'e', 'incrível.'];
  String displayedString = "Olá Mundo!";

  void onPressOfButton(){
    setState((){
      displayedString = strings[counter];
      counter = counter < 4 ? counter + 1 : 0;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        //title: Text('Exemplo com StatefulWidget');
        title: const Text('Exemplo com StatefulWidget!'),
        backgroundColor: Colors.green,
      ),
      body: Container(
        child: Center(
          child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(displayedString, style: TextStyle(fontSize: 40.0)),
            Padding(padding: EdgeInsets.all(10.0)),
            RaisedButton(
              child: Text(
                "clique aqui",
                style: TextStyle(color: Colors.white),
              ),
              color: Colors.red,
              onPressed: onPressOfButton,
            ),
          ],
          ),
        ),
      ),
    );
  }
}
