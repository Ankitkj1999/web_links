import 'package:flutter/material.dart';
import 'package:social_media_flutter/social_media_flutter.dart';
import 'package:web_links/const/socialContainer.dart';
import 'package:web_links/widgets/animated_container.dart';
import 'package:web_links/widgets/footer.dart';
import 'package:web_links/widgets/socialCards.dart';

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

//TODO: Usegetx for state management abd utils
//TODO: Add dark theme and lighttheme
//TODO: Add localization
//TODO: Replace SocialContainer with custom widget

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    bool isDesktop = MediaQuery.of(context).size.width > 800;
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
                    // height: 490,
                    width: MediaQuery.of(context).size.width,
                    decoration: const BoxDecoration(
                      color: Color(0xff171430),
                      shape: BoxShape.rectangle,
                      borderRadius: BorderRadius.vertical(
                        top: Radius.circular(50.0),
                      ),
                    ),
                    child: SingleChildScrollView(
                      child: Column(
                        children: [
                          Center(
                            child: isDesktop ? RowView() : ColumnView(),
                          ),
                          Footer(),
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

  Column ColumnView() {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        SizedBox(height: MediaQuery.of(context).size.height * 0.06),
        codewars(),
        geeksforgeeks(),
        github(),
        gmail(),
        hashnode(),
        instagram(),
        playstore(),
        portfolio(),
        resume(),
        twitter(),
        whatsapp(),
        youtube(),
        SizedBox(height: MediaQuery.of(context).size.height * 0.05),
      ],
    );
  }

  Row RowView() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Column(
          children: [
            SizedBox(
              height: MediaQuery.of(context).size.height * 0.05,
            ),
            codewars(),
            geeksforgeeks(),
            github(),
            gmail(),
            hashnode(),
            instagram(),
          ],
        ),
        SizedBox(width: MediaQuery.of(context).size.width * 0.05),
        Column(
          children: [
            SizedBox(
              height: MediaQuery.of(context).size.height * 0.05,
            ),
            playstore(),
            portfolio(),
            resume(),
            twitter(),
            whatsapp(),
            youtube(),
          ],
        ),
        // Instagram
      ],
    );
  }
}
