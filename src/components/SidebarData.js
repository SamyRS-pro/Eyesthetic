import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Accueil",
    path: "/accueil",
  },
  {
    title: "Blepharoplastie",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Superieure",
        path: "/blepharoplastie/superieure",
      },
      {
        title: "Superieure Elargie",
        path: "/blepharoplastie/superieureelargie",
      },
      {
        title: "Superieure + Ptosis",
        path: "/blepharoplastie/superieureptosis",
      },
    ],
  },
  {
    title: "Lifting",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Temporal",
        path: "/lifting/temporal",
        cName: "sub-nav",
      },
      {
        title: "Frontal & Malaire",
        path: "/lifting/frontalmalaire",
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Chirurgie",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Combinee des 4 Paupieres",
        path: "/chirurgie/combine",
      },
      {
        title: "Des Poches sans cicatrice",
        path: "/chirurgie/poche",
      },
    ],
  },
  {
    title: "Comblement",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Joues & Levres",
        path: "/comblement/joueslevres",
      },
      {
        title: "Des 3 niveau du Visage",
        path: "/comblement/visage",
      },
    ],
  },
  {
    title: "Modification du Pli Palpebral Asiatique",
    path: "/palpebral",
  },
  {
    title: "Rajeunissement medical de la Face",
    path: "/rajeunissement",
  },
  {
    title: "Augmentation du volume des Pommettes",
    path: "/pommettes",
  },
  {
    title: "Plan d'acces",
    path: "/acces",
  },
];
