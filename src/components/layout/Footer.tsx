import {
  Box,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsFacebook, BsTwitterX, BsInstagram } from "react-icons/bs";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box as="footer" className="bg-gbam-dark text-white px-4 lg:px-8">
      <Box className="container mx-auto px-4 py-12">
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Box>
            <Box className="flex items-center mb-4">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="flex items-center hover:cursor-pointer"
              >
                <img
                  src="/gbam logo.png"
                  alt="GBAM Logo"
                  className="!h-12 md:!h-14 mr-2"
                />
              </Link>
            </Box>
            <Text className="text-white/70 !mb-4">
              Graffiti Basketball, and Music, unifying communities
              through sports and creativity since 2014.
            </Text>
            <Flex className="space-x-4 mt-4">
              <a
                href="https://www.facebook.com/share/1AZBsW3se4/?mibextid=wwXIfr"
                target="_blank"
                className="text-white/70 hover:!text-gbam-yellow transition-colors cursor-pointer"
              >
                <BsFacebook className="size-5" />
              </a>
              <a
                href=""
                target="_blank"
                className="text-white/70 hover:!text-gbam-yellow transition-colors cursor-pointer"
              >
                <BsTwitterX className="size-5" />
              </a>
              <a
                href="https://www.instagram.com/hiphopgraffiti_inc/"
                target="_blank"
                className="text-white/70 hover:!text-gbam-yellow transition-colors cursor-pointer"
              >
                <BsInstagram className="size-5" />
              </a>
            </Flex>
          </Box>

          <Box>
            <Heading as="h3" className="!text-xl font-bold !mb-4">
              Quick Links
            </Heading>
            <UnorderedList className="space-y-2">
              <ListItem>
                <Link
                  to="home"
                  onClick={()=>navigate("/")}
                  smooth={true}
                  duration={500}
                  className="text-white/70 hover:!text-gbam-yellow transition-colors cursor-pointer"
                >
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="about"
                  onClick={()=>navigate("/")}
                  smooth={true}
                  duration={500}
                  className="text-white/70 hover:!text-gbam-yellow transition-colors cursor-pointer"
                >
                  About Us
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="academy"
                  smooth={true}
                  duration={500}
                  className="text-white/70 hover:!text-gbam-yellow transition-colors cursor-pointer"
                >
                  Academy
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="championships"
                  smooth={true}
                  duration={500}
                  className="text-white/70 hover:!text-gbam-yellow transition-colors cursor-pointer"
                >
                  Championships
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="membership"
                  smooth={true}
                  duration={500}
                  className="text-white/70 hover:!text-gbam-yellow transition-colors cursor-pointer"
                >
                  Membership
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="foundation"
                  smooth={true}
                  duration={500}
                  className="text-white/70 hover:!text-gbam-yellow transition-colors cursor-pointer"
                >
                  Foundation
                </Link>
              </ListItem>
            </UnorderedList>
          </Box>

          <Box>
            <Heading as="h3" className="!text-xl font-bold !mb-4">
              Programs
            </Heading>
            <UnorderedList className="space-y-2">
              <ListItem>
                <Link
                  to="championships"
                  smooth={true}
                  duration={500}
                  className="text-white/70 hover:!text-gbam-yellow transition-colors cursor-pointer"
                >
                  Adult Championship
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="championships"
                  smooth={true}
                  duration={500}
                  className="text-white/70 hover:!text-gbam-yellow transition-colors cursor-pointer"
                >
                  Inter-LGA Championships
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="bounceback"
                  smooth={true}
                  duration={500}
                  className="text-white/70 hover:!text-gbam-yellow transition-colors cursor-pointer"
                >
                  Bounce Back Initiative
                </Link>
              </ListItem>
            </UnorderedList>
          </Box>

          <Box>
            <Heading as="h3" className="!text-xl font-bold !mb-4">
              Contact Us
            </Heading>
            <UnorderedList className="space-y-2">
              <ListItem className="flex items-start">
                <IoLocationOutline className="size-5 mr-2 mt-1 text-gbam-yellow" />
               
                <a className="text-white/70" target="blank" href="https://www.google.com/maps/place/10%C2%B031'58.4%22N+7%C2%B026'18.5%22E/@10.5328771,7.4359052,17z/data=!3m1!4b1!4m4!3m3!8m2!3d10.5328771!4d7.4384801?entry=ttu&g_ep=EgoyMDI1MDkxNS4wIKXMDSoASAFQAw%3D%3D">Kaduna, Nigeria</a>
              </ListItem>
              <ListItem className="flex items-start">
                <FaFacebook className="size-5 mr-2 mt-1 text-gbam-yellow" />
                <a target="blank" className="!text-white/70" href="https://www.facebook.com/share/1AZBsW3se4/?mibextid=wwXIfr">@hiphopgraffiti</a>
              </ListItem>
              <ListItem className="flex items-start">
                <FaInstagram className="size-5 mr-2 mt-1 text-gbam-yellow" />
                <a target="blank" className="!text-white/70" href="https://www.instagram.com/hiphopgraffiti_inc/">@hiphopgraffiti_inc</a>
              </ListItem>
              <ListItem className="flex items-start">
                <FaLinkedin className="size-5 mr-2 mt-1 text-gbam-yellow" />
                <a target="blank" className="!text-white/70" href="https://www.linkedin.com/groups/9811780">Linkedin</a>
              </ListItem>
              <ListItem className="flex items-start">
                <LuPhone className="size-5 mr-2 mt-1 text-gbam-yellow" />
                <span className="text-white/70">
                  +234 80 551 549 70 or +234 70 358 679 97
                </span>
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>

        <Box className="border-t border-white/10 mt-12 pt-8 text-center text-white/60 text-sm">
          <p>
            &copy; {new Date().getFullYear()} #GBAM - Graffiti Basketball,
            and Music. All rights reserved.
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
