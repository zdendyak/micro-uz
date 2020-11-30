export const parseHtml = data => {
  console.info('parser data', data.length);
  data = data.replace(/[\t\n\r]/g, "");
  console.info('parser data', data.length);
  const TABLE_RE = /<table>(.*?)<\/table>/g;
  const THEAD_RE = /<thead>(.*?)<\/thead>/g;
  const TBODY_RE = /<tbody>(.*?)<\/tbody>/g;
  const TR_RE    = /<tr>(.*?)<\/tr>/gi; 
  const TH_RE    = /<th>(.*?)<\/th>/gi;
  const TD_RE    = /<td>(.*?)<\/td>/gi;
  const TAG_RE   = /(<.*?>)|(<\/.*?>)/g;

  const tables = data.match(TABLE_RE);
  if (tables && tables.length > 0) {
    const table = tables[0];
    const thead = table.match(THEAD_RE);
    const throws = thead && thead[0].match(TR_RE);
    const thcols = throws && throws[0].match(TH_RE);
    const head = thcols && thcols.map(col => col.replace(TAG_RE, ""));

    const tbody = table.match(TBODY_RE);
    if (tbody) {
      const rows = tbody[0].match(TR_RE);
      if (rows) {
        const data = rows.map(row => {
          const cols = row.match(TD_RE);
          return cols && cols.map(col => col.replace(TAG_RE, ""));
        });

        return { head, data };
      };
      
    }
  }
    
  return { error: 'cannot find schedule table'};
};
