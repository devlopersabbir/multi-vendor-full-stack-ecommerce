import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface IBreadcrumbs {
  link?: string;
  name?: string;
}

const Breadcrumbs = ({ link, name }: IBreadcrumbs) => {
  return (
    <Breadcrumb separator="/" mb={8}>
      {[0, 1, 2, 3].map((_, index: number) => (
        <BreadcrumbItem key={index}>
          <BreadcrumbLink as={Link} href={link ?? "#"}>
            {name ?? "Books"}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
