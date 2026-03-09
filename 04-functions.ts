// Optional Parameters in Function
function disp_details(id: number, name: string, mail_id?: string) {
  console.log("Id: ", id);
  console.log("Name: ", name);
  console.log("Email Id: ", mail_id);
}

disp_details(111, "Debabrata Das");
disp_details(112, "Soma Das", "Somadas@gmail.com");
