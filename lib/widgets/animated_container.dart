import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class CustomAnimatedContainer extends StatefulWidget {
  final Color containerColor;
  final Color borderColor;
  final String imagePath;
  final String text;
  final String linkUrl;

  CustomAnimatedContainer({
    required this.containerColor,
    required this.borderColor,
    required this.imagePath,
    required this.text,
    required this.linkUrl,
  });

  @override
  _CustomAnimatedContainerState createState() =>
      _CustomAnimatedContainerState();
}

class _CustomAnimatedContainerState extends State<CustomAnimatedContainer> {
  bool _isHovered = false;

  @override
  Widget build(BuildContext context) {
    return Container(
      // constrains of min height and width
      constraints: BoxConstraints(
        minHeight: 50,
        minWidth: 250,
      ),
      margin:
          EdgeInsets.only(bottom: MediaQuery.of(context).size.height * 0.02),
      child: InkWell(
        onTap: () {
          // Open the link when the container is clicked
          launch(widget.linkUrl);
        },
        child: MouseRegion(
          onEnter: (_) {
            setState(() {
              _isHovered = true;
            });
          },
          onExit: (_) {
            setState(() {
              _isHovered = false;
            });
          },
          child: AnimatedContainer(
            duration: Duration(milliseconds: 400),
            height: MediaQuery.of(context).size.height * 0.063,
            width: MediaQuery.of(context).size.width * 0.13,
            decoration: BoxDecoration(
              color: widget.containerColor,
              borderRadius: BorderRadius.circular(15),
              border: Border.all(
                color: _isHovered ? widget.borderColor : Colors.white,
                width: 2,
              ),
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withOpacity(0.5),
                  spreadRadius: 1,
                  blurRadius: 5,
                  offset: const Offset(0, 3),
                ),
              ],
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Expanded(
                  flex: 3,
                  child: Container(
                    padding: EdgeInsets.all(1),
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: Colors.white,
                    ),
                    child: Image.asset(
                      widget.imagePath,
                      height: MediaQuery.of(context).size.height * 0.04,
                      width: MediaQuery.of(context).size.width * 0.04,
                    ),
                  ),
                ),
                SizedBox(
                  width: MediaQuery.of(context).size.width * 0.002,
                ),
                Expanded(
                  flex: 8,
                  child: Text(
                    widget.text,
                    style: TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.w500,
                      fontSize: MediaQuery.of(context).size.height * 0.02,
                    ),
                  ),
                ),
                AnimatedSwitcher(
                  duration: Duration(milliseconds: 400),
                  child: _isHovered
                      ? Icon(
                          Icons.touch_app_outlined,
                          key: ValueKey<bool>(_isHovered),
                          color: Colors.white,
                        )
                      : Icon(
                          Icons.arrow_forward_ios,
                          key: ValueKey<bool>(_isHovered),
                          color: Colors.white,
                        ),
                ),
                SizedBox(
                  width: MediaQuery.of(context).size.width * 0.005,
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
