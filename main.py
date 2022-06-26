# -*- coding: utf-8 -*-
import re,requests,datetime,time,json
from prettytable import PrettyTable
from colorama import init,Fore
from stationinfo import chezhan_code,chezhan_names

init(autoreset=False)

class Colored(object):
    def yeah(self,s):
        return Fore.LIGHTCYAN_EX + s + Fore.RESET
    def green(self,s):
        return Fore.LIGHTGREEN_EX + s + Fore.RESET
    def yellow(self,s):
        return Fore.LIGHTYELLOW_EX + s + Fore.RESET
    def white(self,s):
        return Fore.LIGHTWHITE_EX + s + Fore.RESET
    def blue(self,s):
        return Fore.LIGHTBLUE_EX + s + Fore.RESET

def showTicket(html):
    html = json.loads(html)
    table = PrettyTable(["  车次  ","出发车站","到达车站","出发时间","到达时间"," 历时 ","商务座"," 一等座","二等座","高级软卧","软卧","动卧","硬卧","软座","硬座","无座","其他","备注"])
    for i in html['data']['result']:
        name = [
                    "station_train_code",
                    "from_station_name",
                    "to_station_name",
                    "start_time",
                    "arrive_time",
                    "lishi",
                    "swz_num",
                    "zy_num",
                    "ze_num",
                    "dw_num",
                    "gr_num",
                    "rw_num",
                    "yw_num",
                    "rz_num",
                    "yz_num",
                    "wz_num",
                    "qt_num",
                    "note_num"
               ]
        data = {
                    "station_train_code": '',
                    "from_station_name": '',
                    "to_station_name": '',
                    "start_time": '',
                    "arrive_time": '',
                    "lishi": '',
                    "swz_num": '',
                    "zy_num": '',
                    "ze_num": '',
                    "dw_num": '',
                    "gr_num": '',
                    "rw_num": '',
                    "yw_num": '',
                    "rz_num": '',
                    "yz_num": '',
                    "wz_num": '',
                    "qt_num": '',
                    "note_num": ''
                }
        #将各项信息提取并赋值
        item = i.split('|')                                 #使用“||”进行分割
        data["station_train_code"]  = item[3]               #获取车次信息，在3号位置
        data["from_station_name"]   = item[6]               #始发站信息在6号位置
        data["to_station_name"]     = item[7]               #终点站信息在7号位置
        data["start_time"]          = item[8]               #出发时间在8号位置
        data["arrive_time"]         = item[9]               #抵达时间在9号位置
        data["lishi"]               = item[10]              #经历时间在10号位置
        data["swz_num"]             = item[32] or item[25]  #特别注意，商务座在32或25位置
        data["zy_num"]              = item[31]              #一等座信息在31号位置
        data["ze_num"]              = item[30]              #二等座信息在30号位置
        data["gr_num"]              = item[21]              #高级软卧信息在21号位置
        data["rw_num"]              = item[23]              #软卧信息在23号位置
        data["dw_num"]              = item[27]              #动卧信息在27号位置
        data["yw_num"]              = item[28]              #硬卧信息在28号位置
        data["rz_num"]              = item[24]              #软座信息在24号位置
        data["yz_num"]              = item[29]              #硬座信息在29号位置
        data["wz_num"]              = item[26]              #无座信息在26号位置
        data["qt_num"]              = item[22]              #其他信息在22号位置
        data["note_num"]            = item[1]               #备注信息在1号位置

        color = Colored()
        data["note_num"] = color.white(item[1])
        #如果没有信息，那么就用“-”代替
        for pos in name:
            if data[pos] == "":
                data[pos] = "-"

        tickets = []
        cont = []
        cont.append(data)
        for x in cont:
            tmp = []
            for y in name:
                if y == "from_station_name":
                    s = color.green(chezhan_names[data["from_station_name"]])
                    tmp.append(s)
                elif y == "to_station_name":
                    s = color.yeah(chezhan_names[data["to_station_name"]])
                    tmp.append(s)
                elif y == "start_time":
                    s = color.green(data["start_time"])
                    tmp.append(s)
                elif y == "arrive_time":
                    s = color.yeah(data["arrive_time"])
                    tmp.append(s)
                elif y == "station_train_code":
                    s = color.yellow(data["station_train_code"])
                    tmp.append(s)
                else:
                    tmp.append(data[y])
            tickets.append(tmp)
        for ticket in tickets:
            table.add_row(ticket)
    print(table)



def main():

    date = input("请输入时间：\n")
    Fs = input("请输入起始站点：\n")
    Ts = input("请输入目的站点：\n")
    from_station = chezhan_code[Fs]
    to_station = chezhan_code[Ts]
    Fs1 = ''
    Ts1 = ''
    for item in Fs:
        Fs1 += item.encode('unicode_escape').decode('utf-8')
    for item in Ts:
        Ts1 += item.encode('unicode_escape').decode('utf-8')

    Fs1 = (Fs1.replace('\\', '%')).upper()+'2C'+from_station
    Ts1 = (Ts1.replace('\\', '%')).upper() + '2C' + to_station
    Identity     = input("请确认身份：\n")
    url          = "https://kyfw.12306.cn/otn/leftTicket/query?"
    headers = {
        "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Mobile Safari/537.36 Edg/103.0.1264.37",
        "Cookie": "JSESSIONID=CF98B2C60FE820D8D134CEF1551897B2; guidesStatus=off; highContrastMode=defaltMode; cursorStatus=off; RAIL_EXPIRATION=1656419477807; RAIL_DEVICEID=Jg_TDuHDSYcwtJ07J9ZfPoVOgfW6y1X6psijwRfXyXoerFDcOFrn2TX6FykPiwwtoVPOZsQ9L_u6zfhoZ8zmrmu_c2fBKowvZTT0RSRIMJh6V5-CMyykqg50DVgGPaSRQYUh6d8IG2H91PJvFxmwly-y0xWQkOHJ; _jc_save_toDate=2022-06-26; BIGipServerpassport=854065418.50215.0000; BIGipServerpool_passport=149160458.50215.0000; route=9036359bb8a8a461c164a04f8f50b252; current_captcha_type=Z; _jc_save_wfdc_flag=dc; BIGipServerotn=1005584906.38945.0000; _jc_save_fromStation="+Fs1+"; _jc_save_toStation="+Ts1+"; _jc_save_fromDate="+date
    }
    url=url+"leftTicketDTO.train_date="+date+"&leftTicketDTO.from_station="+from_station+"&leftTicketDTO.to_station="+to_station+"&purpose_codes="+Identity
    #print(url) 已经检查过生成的URL是正确的
    #request请求获取主页
    r = requests.get(url,headers=headers)
    r.encoding = 'utf-8'
    r.raise_for_status()   #如果发送了一个错误的请求，会抛出异常
    r.encoding = r.apparent_encoding
    # data=soup.select('#lc_new_fromstation')
    # print(data)
    showTicket(r.text)
    #print(r.text)

main()
