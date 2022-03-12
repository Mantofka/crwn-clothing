import React, {lazy, Suspense} from "react";
import { useSelector } from "react-redux";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import { DirectoryMenuContainer } from "./directory.styles";
import Spinner from "../spinner/spinner.component";

const MenuItem = lazy(() => import("../menu-item/menu-item.component"));

const Directory = () => {
  const sections = useSelector(selectDirectorySections);

  return (
    <DirectoryMenuContainer className='directory-menu'>
      <Suspense fallback={<Spinner />}>
      {sections.map(({ id, ...restProps }) => (
        <MenuItem key={id} {...restProps} />
      ))}
      </Suspense>
    </DirectoryMenuContainer>
  );
};


export default Directory;
