import React, { useState, useEffect } from "react";
import "easymde/dist/easymde.min.css";
import { getPage, writePage } from "context";
import LiveCodeBlock from "components/code-block";

const defaultPage = (page: string) => `
export default (props) => {
	setTheme('funk');
  return <Page {...props}  mx="20px" pt="10px"/>
}

[home](/)

---

## ${page}

`;

export default ({ page }: { page: string }) => {
  const [pageData, setPageData] = useState(
    getPage(page) || defaultPage(page)
  );

  useEffect(() => {
    writePage(page, pageData);
  }, [page, pageData]);

  return <LiveCodeBlock code={pageData} setCode={setPageData} />;
};
