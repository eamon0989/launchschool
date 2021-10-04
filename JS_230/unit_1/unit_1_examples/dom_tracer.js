function domTreeTracer(id) {
  
}

domTreeTracer(1);
//[["ARTICLE"]]
domTreeTracer(2);
//[["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
domTreeTracer(22);
//[["A"], ["STRONG"], ["SPAN", "SPAN"], ["P", "P"], ["SECTION", "SECTION"], ["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]