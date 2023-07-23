import 'package:flutter/material.dart';
import 'package:social_media_flutter/social_media_flutter.dart';

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        height: MediaQuery.of(context).size.height, // 100% of height
        width: MediaQuery.of(context).size.width, // 100% of width
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            colors: [Color(0xff9dc9e9), Color(0xff2059ff)],
          ),
        ),
        child: Stack(
          children: [
            Column(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.only(top: 20.0),
                    child: Center(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: const [
                          CircleAvatar(
                            radius: 80,
                            backgroundImage: AssetImage('assets/ankit.png'),
                          ),
                          SizedBox(
                            height: 5,
                          ),
                          Text(
                            'Ankit Kumar', // Your Name
                            style: TextStyle(
                              fontWeight: FontWeight.bold,
                              fontSize: 28,
                            ),
                          ),
                          SizedBox(
                            height: 5,
                          ),
                          Text(
                            'Passionate Flutter Developer', // Your short bio (optional)
                            style: TextStyle(
                              fontWeight: FontWeight.w400,
                              fontStyle: FontStyle.italic,
                              fontSize: 20,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
                const SizedBox(
                  height: 10,
                ),
                Expanded(
                  child: Container(
                    height: 490,
                    width: MediaQuery.of(context).size.width,
                    decoration: const BoxDecoration(
                      color: Color(0xff171430),
                      shape: BoxShape.rectangle,
                      borderRadius: BorderRadius.vertical(
                        top: Radius.circular(50.0),
                      ),
                    ),
                    child: Center(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          // Instagram
                          SocialContainer(
                              containerColor: Colors.pink,
                              placeholderText: 'app.ankitkumar',
                              iconData: SocialIconsFlutter.instagram,
                              iconColor: Colors.white,
                              link:
                                  'https://www.instagram.com/app.ankitkumar/'),

                          // Linkedin
                          SocialContainer(
                              containerColor: Colors.blueAccent,
                              placeholderText: 'Ankitkj1999',
                              iconData: SocialIconsFlutter.linkedin,
                              iconColor: Colors.white,
                              link: 'https://www.linkedin.com/in/ankitkj1999/'),
                          // Github
                          SocialContainer(
                              containerColor: Colors.black38,
                              placeholderText: 'Ankitkj1999',
                              iconData: SocialIconsFlutter.github,
                              iconColor: Colors.white,
                              link: 'https://github.com/Ankitkj1999'),
                          // Twitter
                          SocialContainer(
                              containerColor: Colors.lightBlue,
                              placeholderText: 'Ankitkj1999',
                              iconData: SocialIconsFlutter.twitter,
                              iconColor: Colors.white,
                              link: 'https://twitter.com/Ankitkj1999'),

                          // Portfolio
                          SocialContainer(
                              containerColor: Colors.deepPurpleAccent,
                              placeholderText: 'Portfolio',
                              iconData: SocialIconsFlutter.apple,
                              iconColor: Colors.white,
                              link: 'https://ankit-kumar-cv.web.app/')
                          // You can add more buttons
                        ],
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class SocialContainer extends StatelessWidget {
  final Color containerColor;
  final String placeholderText;
  final IconData iconData;
  final Color iconColor;
  final String link;

  const SocialContainer(
      {super.key,
      required this.containerColor,
      required this.placeholderText,
      required this.iconData,
      required this.iconColor,
      required this.link});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        const SizedBox(
          height: 10,
        ),
        Container(
          height: 60,
          width: 250,
          decoration: BoxDecoration(
            color: containerColor,
            borderRadius: BorderRadius.circular(15),
          ),
          child: Padding(
            padding: const EdgeInsets.all(10.0),
            child: SocialWidget(
              placeholderText: placeholderText,
              iconData: iconData,
              iconColor: iconColor,
              iconSize: 24,
              link: link,
              placeholderStyle: const TextStyle(
                color: Colors.white,
                fontSize: 20,
              ),
            ),
          ),
        ),
      ],
    );
  }
}
