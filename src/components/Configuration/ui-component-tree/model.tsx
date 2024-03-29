import React, { FC, ReactNode } from "react";
import { SchemaTree } from "components/Configuration/appConfigurationM/types";
import TreeItem from "./TreeNode";

export type TreeTemplateProps = { item: SchemaTree; children: ReactNode };

type Props = {
  tree: SchemaTree;
  template?: FC<TreeTemplateProps>;
};
export function RecursiveTree({ tree, template = TreeItem }: Props) {
  const TemplateItem = template;

  const renderSubTree = (subTree: SchemaTree) => {

    return (
      subTree.items &&
      subTree.items.map((component) => (
        <TemplateItem item={component} key={component.id}>
          {renderSubTree(component)}
        </TemplateItem>
      ))
    );
  };

  const preparedTree = {
    items: [tree],
  };

  return renderSubTree(preparedTree);
}
