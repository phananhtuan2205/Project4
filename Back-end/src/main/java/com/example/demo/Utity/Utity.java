package com.example.demo.Utity;

import org.mindrot.jbcrypt.BCrypt;

import java.text.Format;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.format.DateTimeFormatter;
import java.util.Date;

public class  Utity {
    public static String ConvertDateToString(Date mydate){
        Format formatter = new SimpleDateFormat("yyyy-MM-dd");
        String s = formatter.format(mydate);
        return s;
    }

    public static  Date ConverStringToDate(String mydate) throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date date1 = sdf.parse(mydate);
        return date1 ;
    }




}
