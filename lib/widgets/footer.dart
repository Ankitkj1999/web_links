import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart' as url_launcher;

class Footer extends StatefulWidget {
  @override
  _FooterState createState() => _FooterState();
}

class _FooterState extends State<Footer> {
  String url = 'https://github.com/Ankitkj1999/web_links';
  bool isHovered = false;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      // Open the link when the container is clicked
      onTap: () {
        _launchUrl(Uri.parse(url));
      },
      onHover: (value) {
        // Handle hover state
        setState(() {
          isHovered = value;
        });
      },
      child: Container(
        // color: Colors.black,
        margin: EdgeInsets.only(top: 20, bottom: 20),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            _buildIcon(Icons.devices, isHovered),
            SizedBox(width: 5),
            Text(
              'Made with',
              style: TextStyle(
                color: Colors.white,
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(width: 5),
            _buildIcon(Icons.star, isHovered),
            SizedBox(width: 5),
            Text(
              'Flutter by Ankit Kumar',
              style: TextStyle(
                color: Colors.white,
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildIcon(IconData icon, bool isHovered) {
    return Icon(
      icon,
      // Change the color based on hover state
      color: isHovered ? Colors.amber : Colors.white,
    );
  }

  void _launchUrl(Uri url) async {
    if (await url_launcher.canLaunch(url.toString())) {
      await url_launcher.launch(url.toString());
    } else {
      throw 'Could not launch $url';
    }
  }
}
