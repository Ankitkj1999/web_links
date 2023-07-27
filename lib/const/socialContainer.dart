import 'package:flutter/material.dart';
import 'package:social_media_flutter/social_media_flutter.dart';

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
