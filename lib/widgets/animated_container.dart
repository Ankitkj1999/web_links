// import 'package:flutter/material.dart';

// class AnimatedContainerWithClickAndHover extends StatefulWidget {
//   @override
//   _AnimatedContainerWithClickAndHoverState createState() =>
//       _AnimatedContainerWithClickAndHoverState();
// }

// class _AnimatedContainerWithClickAndHoverState
//     extends State<AnimatedContainerWithClickAndHover> {
//   bool _isHovered = false;

//   @override
//   Widget build(BuildContext context) {
//     return InkWell(
//       onTap: () {
//         // Add your click action here
//         print('Container clicked!');
//       },
//       onHover: (isHovered) {
//         setState(() {
//           _isHovered = isHovered;
//         });
//       },
//       child: MouseRegion(
//         onEnter: (_) {
//           // Handle mouse enter
//         },
//         onExit: (_) {
//           // Handle mouse exit
//         },
//         child: AnimatedContainer(
//           duration: Duration(milliseconds: 200),
//           height: MediaQuery.of(context).size.height * 0.06,
//           width: MediaQuery.of(context).size.width * 0.13,
//           decoration: BoxDecoration(
//             color: Colors.blueAccent,
//             borderRadius: BorderRadius.circular(15),
//             // add white borders
//             border: Border.all(
//               color: _isHovered ? Colors.blueAccent : Colors.white,
//               width: 2,
//             ),
//             // add shadow effects here
//             boxShadow: [
//               BoxShadow(
//                 color: Colors.black.withOpacity(0.5),
//                 spreadRadius: 1,
//                 blurRadius: 5,
//                 offset: const Offset(0, 3), // changes position of shadow
//               ),
//             ],
//           ),
//           // child as Row containing an image and text
//           child: Row(
//             mainAxisAlignment: MainAxisAlignment.spaceEvenly,
//             children: [
//               Expanded(
//                 flex: 3,
//                 child: Image.asset(
//                   'assets/png/gmail.png',
//                   height: MediaQuery.of(context).size.height * 0.04,
//                   width: MediaQuery.of(context).size.width * 0.04,
//                 ),
//               ),
//               Expanded(
//                 flex: 10,
//                 child: Text(
//                   'Latest Resume',
//                   style: TextStyle(
//                     color: Colors.white,
//                     fontWeight: FontWeight.w500,
//                     fontSize: MediaQuery.of(context).size.height * 0.02,
//                   ),
//                 ),
//               ),
//             ],
//           ),
//         ),
//       ),
//     );
//   }
// }

import 'package:flutter/material.dart';

class AnimatedContainerWithClickAndHover extends StatefulWidget {
  @override
  _AnimatedContainerWithClickAndHoverState createState() =>
      _AnimatedContainerWithClickAndHoverState();
}

class _AnimatedContainerWithClickAndHoverState
    extends State<AnimatedContainerWithClickAndHover> {
  bool _isHovered = false;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        // Add your click action here
        print('Container clicked!');
      },
      onHover: (isHovered) {
        setState(() {
          _isHovered = isHovered;
        });
      },
      child: MouseRegion(
        onEnter: (_) {
          // Handle mouse enter
        },
        onExit: (_) {
          // Handle mouse exit
        },
        child: AnimatedContainer(
          duration: Duration(milliseconds: 200),
          height: MediaQuery.of(context).size.height * 0.06,
          width: MediaQuery.of(context).size.width * 0.13,
          decoration: BoxDecoration(
            color: Colors.blueAccent,
            borderRadius: BorderRadius.circular(15),
            // add white borders
            border: Border.all(
              color: _isHovered ? Colors.blueAccent : Colors.white,
              width: 2,
            ),
            // add shadow effects here
            boxShadow: [
              BoxShadow(
                color: Colors.black.withOpacity(0.5),
                spreadRadius: 1,
                blurRadius: 5,
                offset: const Offset(0, 3), // changes position of shadow
              ),
            ],
          ),
          // child as Row containing an image and text
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              Expanded(
                flex: 3,
                child: Image.asset(
                  'assets/png/gmail.png',
                  height: MediaQuery.of(context).size.height * 0.04,
                  width: MediaQuery.of(context).size.width * 0.04,
                ),
              ),
              Expanded(
                flex: 8,
                child: Text(
                  'Latest Resume',
                  style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.w500,
                    fontSize: MediaQuery.of(context).size.height * 0.02,
                  ),
                ),
              ),
              AnimatedOpacity(
                duration: Duration(milliseconds: 200),
                opacity: _isHovered ? 1.0 : 0.0,
                child: Icon(
                  Icons.arrow_forward_ios,
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
    );
  }
}
