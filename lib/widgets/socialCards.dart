import 'package:flutter/material.dart';
import 'package:web_links/widgets/animated_container.dart';

// resume
CustomAnimatedContainer resume() {
  return CustomAnimatedContainer(
    containerColor: Color.fromARGB(255, 245, 176, 3),
    borderColor: Color.fromARGB(
        255, 245, 176, 3), // Change this to the desired border color
    imagePath: 'assets/png/resume.png',
    text: 'Latest Resume',
    linkUrl:
        'https://drive.google.com/file/d/1BEtINh9R3LSddlltgN4UDVxo6zpavGaj/view?usp=sharing',
  );
}

// portfolio
CustomAnimatedContainer portfolio() {
  return CustomAnimatedContainer(
      containerColor: Colors.deepPurpleAccent,
      borderColor: Colors.deepPurpleAccent,
      imagePath: 'assets/png/portfolio.png',
      text: 'Portfolio',
      linkUrl: 'https://ankit-kumar-cv.web.app/');
}

// twitter
CustomAnimatedContainer twitter() {
  return CustomAnimatedContainer(
      containerColor: Colors.lightBlue,
      borderColor: Colors.lightBlue,
      imagePath: 'assets/png/twitter.png',
      text: 'Twitter',
      linkUrl: 'https://twitter.com/Ankitkj1999');
}

// github
CustomAnimatedContainer github() {
  return CustomAnimatedContainer(
      containerColor: Colors.black38,
      borderColor: Colors.black38,
      imagePath: 'assets/png/github.png',
      text: 'GtiHub',
      linkUrl: 'https://github.com/ankitkj1999');
}

// linkedin
CustomAnimatedContainer linkedin() {
  return CustomAnimatedContainer(
      containerColor: Colors.blueAccent,
      borderColor: Colors.blueAccent,
      imagePath: 'assets/png/linkedin.png',
      text: 'LinkedIn',
      linkUrl: 'https://www.linkedin.com/in/ankitkj1999/');
}

// instagram
CustomAnimatedContainer instagram() {
  return CustomAnimatedContainer(
    containerColor: Colors.pink,
    borderColor: Colors.pink, // Change this to the desired border color
    imagePath: 'assets/png/instagram.png',
    text: 'Instagram',
    linkUrl: 'https://www.instagram.com/app.ankitkumar/',
  );
}
// youtube

CustomAnimatedContainer youtube() {
  return CustomAnimatedContainer(
    containerColor: Colors.red,
    borderColor: Colors.red, // Change this to the desired border color
    imagePath: 'assets/png/youtube.png',
    text: 'YouTube',
    linkUrl: 'https://www.youtube.com/channel/UCPQpSLYCsGp6dclraH3o_5Q',
  );
}

// hashnode
CustomAnimatedContainer hashnode() {
  return CustomAnimatedContainer(
    containerColor: Colors.cyan,
    borderColor: Colors.cyan, // Change this to the desired border color
    imagePath: 'assets/png/hashnode.png',
    text: 'Hashnode ',
    linkUrl: 'https://hashnode.com/@ankitkj1999',
  );
}

// gmail
CustomAnimatedContainer gmail() {
  return CustomAnimatedContainer(
    containerColor: Colors.redAccent,
    borderColor: Colors.redAccent, // Change this to the desired border color
    imagePath: 'assets/png/gmail.png',
    text: 'Gmail',
    linkUrl: 'mailto:ankit.k.j1999@gmail.com',
  );
}

// geeksforgeeks
CustomAnimatedContainer geeksforgeeks() {
  return CustomAnimatedContainer(
    containerColor: Colors.green,
    borderColor: Colors.green, // Change this to the desired border color
    imagePath: 'assets/png/geeksforgeeks.png',
    text: 'GeeksForGeeks',
    linkUrl: 'https://auth.geeksforgeeks.org/user/ankit_kumar_/articles',
  );
}

// codewars
CustomAnimatedContainer codewars() {
  return CustomAnimatedContainer(
    containerColor: Colors.deepOrange,
    borderColor: Colors.black, // Change this to the desired border color
    imagePath: 'assets/png/codewars.png',
    text: 'CodeWars',
    linkUrl: 'https://www.codewars.com/users/Ankitkj1999',
  );
}

// playstore
CustomAnimatedContainer playstore() {
  return CustomAnimatedContainer(
    containerColor: Colors.lightBlueAccent,
    borderColor:
        Colors.lightBlueAccent, // Change this to the desired border color
    imagePath: 'assets/png/playstore.png',
    text: 'PlayStore',
    linkUrl:
        'https://play.google.com/store/apps/details?id=com.ankitkumar.maths_tricks_alpha',
  );
}

// whatsapp
CustomAnimatedContainer whatsapp() {
  return CustomAnimatedContainer(
    containerColor: Colors.green,
    borderColor: Colors.green, // Change this to the desired border color
    imagePath: 'assets/png/whatsapp.png',
    text: 'WhatsApp',
    linkUrl: 'https://wa.link/ve17w9',
  );
}
