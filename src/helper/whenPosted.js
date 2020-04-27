const whenPosted = (createdAt) => {
  const date = new Date();
  const minutes = (-1 * (Date.parse(createdAt) - date.getTime())) / (1000 * 60);
  if (minutes > 43829) {
    const ISODate = new Date(createdAt);
    const year = ISODate.getFullYear();
    let month = ISODate.getMonth() + 1;
    let dt = ISODate.getDate();

    if (dt < 10) {
      dt = `0 ${dt}`;
    }
    if (month < 10) {
      month = `0 ${month}`;
    }
    return `${dt} - ${month} - ${year}`;
  }
  if (minutes > 1440 * 2) {
    return `${Math.ceil(minutes / 1440)} dni temu`;
  }
  if (minutes > 1440) {
    return '1 dzień temu';
  }
  if (minutes > 60 * 2) {
    return `${Math.ceil(minutes / 60)}h temu`;
  }
  if (minutes > 60) {
    return 'godzinę temu';
  }
  if (minutes > 2) {
    return `${Math.ceil(minutes)} min temu`;
  }
  if (minutes) {
    return 'minutę temu';
  }
  return 'przed chwilą';
};
export default whenPosted;
