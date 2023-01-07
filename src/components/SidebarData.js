import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Accueil",
    path: "/eyesthetic/accueil",
  },
  {
    title: "Blepharoplastie",
    path: "#",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Superieure",
        path: "/eyesthetic/blepharoplastie/superieure",
      },
      {
        title: "Superieure Elargie",
        path: "/eyesthetic/blepharoplastie/superieureelargie",
      },
      {
        title: "Superieure + Ptosis",
        path: "/eyesthetic/blepharoplastie/superieureptosis",
      },
    ],
  },
  {
    title: "Lifting",
    path: "#",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Temporal",
        path: "/eyesthetic/lifting/temporal",
        cName: "sub-nav",
      },
      {
        title: "Frontal & Malaire",
        path: "/eyesthetic/lifting/frontalmalaire",
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Chirurgie",
    path: "#",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Combinee des 4 Paupieres",
        path: "/eyesthetic/chirurgie/combine",
      },
      {
        title: "Des Poches sans cicatrice",
        path: "/eyesthetic/chirurgie/poche",
      },
    ],
  },
  {
    title: "Comblement",
    path: "#",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Joues & Levres",
        path: "/eyesthetic/comblement/joueslevres",
      },
      {
        title: "Des 3 niveau du Visage",
        path: "/eyesthetic/comblement/visage",
      },
    ],
  },
  {
    title: "Modification du Pli Palpebral Asiatique",
    path: "/eyesthetic/palpebral",
  },
  {
    title: "Rajeunissement medical de la Face",
    path: "/eyesthetic/rajeunissement",
  },
  {
    title: "Augmentation du volume des Pommettes",
    path: "/eyesthetic/pommettes",
  },
  {
    title: "Plan d'acces",
    path: "/eyesthetic/acces",
  },
];
