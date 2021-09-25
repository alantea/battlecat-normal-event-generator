<template>
  <div id="app">
    <h1>貓咪時程提醒表(近一週)</h1>
    <table>
      <thead>
        <tr>
          <td>
            <b>
            活動
            </b>
          </td>
          <td>
            <b>
              時間
            </b>
          </td>
          <td
            v-for="titleIdx in maxCol"
            :key="titleIdx"
          >
            <b>
              {{ titleIdx }} 回體力
            </b>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, idx) in scheduleList"
          :key="idx"
        >
          <td
            v-if="row.title"
            :rowspan="row.count"
          >
            <b>
              <span
                v-if="row.nodb"
              >
                {{ row.name }}
              </span>
              <a
                v-else
                :href="row.nameLink"
                target="_blank"
              >
                {{ row.name }}
              </a>
            </b>
            <div
              v-for="(nameRow, nameIdx) in row.nameList"
              :key="'row' + idx + 'name' +nameIdx"
            >
              <b>
                <a
                  :href="nameRow.link"
                  target="_blank"
                >
                  {{ nameRow.name }}
                </a>
              </b>
            </div>
          </td>
          <td>
            <a
              :href="row.startLink"
              target="_blank"
            >
            {{ row.startTime }}
            </a>
          </td>
          <td
            v-for="(event, eidx) in row.list"
            :key="'event' + eidx"
          >
            <a
              :href="event.link"
              target="_blank"
            >
              {{ event.time }}
            </a>
          </td>
          <td
            v-for="(space, sidx) in ((maxCol - row.list.length) > 0 ? maxCol - row.list.length : 0)"
            :key="'space' + sidx"
          >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

Date.prototype.addMinutes = function(minutes) {
    var date = new Date(this.valueOf());
    date.setTime(date.getTime() + (minutes * 60 * 1000));
    return date;
}

Date.prototype.setCatTime2 = function(time) {
    // 0000, 2400
    var date = new Date(this.valueOf());
    var rdate = new Date(
      date.getFullYear() + "-" +
      ("00" + (date.getMonth()+1)).slice(-2) + "-" +
      ("00" + date.getDate()).slice(-2) + "T" +
      time.slice(0,2) + ":" +
      time.slice(3,5)
    );
    return rdate;
}

export default {
  name: 'App',
  data: function() {
    return {
      maxCol: 1,
      events: [
        {"id": 1255, "max": 1, "value": 100, "name": "魔法書所指示的地方", schedule: [
            {"day": 1, "time": "08:00"},
            {"day": 2, "time": "12:00"},
            {"day": 3, "time": "19:00"},
            {"day": 4, "time": "22:00"},
            {"day": 5, "time": "08:00"},
            {"day": 6, "time": "12:00"},
            {"day": 7, "time": "19:00"},
          ],
        },
        {"id": 1256, "max": 1, "value": 100, "name": "異界的僕人", schedule: [
            {"day": 1, "time": "12:00"},
            {"day": 2, "time": "19:00"},
            {"day": 3, "time": "22:00"},
            {"day": 4, "time": "08:00"},
            {"day": 5, "time": "12:00"},
            {"day": 6, "time": "19:00"},
            {"day": 7, "time": "22:00"},
          ],
        },
        {"id": 1265, "max": 1, "value": 100, "name": "異界的僕人", schedule: [
            {"day": 1, "time": "19:00"},
            {"day": 2, "time": "22:00"},
            {"day": 3, "time": "08:00"},
            {"day": 4, "time": "12:00"},
            {"day": 5, "time": "19:00"},
            {"day": 6, "time": "22:00"},
            {"day": 7, "time": "08:00"},
          ],
        },
        {"id": 1257, "max": 1, "value": 200, "name": "解放的貓咪", schedule: [
            {"day": 1, "time": "08:00"},
            {"day": 2, "time": "12:00"},
            {"day": 3, "time": "19:00"},
            {"day": 4, "time": "22:00"},
            {"day": 5, "time": "08:00"},
            {"day": 6, "time": "12:00"},
            {"day": 7, "time": "19:00"},
          ],
        },
        {"id": 1258, "max": 1, "value": 100, "name": "解放的坦克貓", schedule: [
            {"day": 1, "time": "12:00"},
            {"day": 2, "time": "19:00"},
            {"day": 3, "time": "22:00"},
            {"day": 4, "time": "08:00"},
            {"day": 5, "time": "12:00"},
            {"day": 6, "time": "19:00"},
            {"day": 7, "time": "22:00"},
          ],
        },
        {"id": 1266, "max": 1, "value": 100, "name": "解放的戰鬥貓", schedule: [
            {"day": 1, "time": "19:00"},
            {"day": 2, "time": "22:00"},
            {"day": 3, "time": "08:00"},
            {"day": 4, "time": "12:00"},
            {"day": 5, "time": "19:00"},
            {"day": 6, "time": "22:00"},
            {"day": 7, "time": "08:00"},
          ],
        },
        {"id": 1269, "max": 1, "value": 100, "name": "女王的研究報告 1", schedule: [
            {"day": 1, "time": "19:00"},
            {"day": 2, "time": "22:00"},
            {"day": 3, "time": "08:00"},
            {"day": 4, "time": "12:00"},
            {"day": 5, "time": "19:00"},
            {"day": 6, "time": "22:00"},
            {"day": 7, "time": "08:00"},
          ],
        },
        {"id": 1270, "max": 1, "value": 100, "name": "女王的研究報告 2", schedule: [
            {"day": 1, "time": "22:00"},
            {"day": 2, "time": "08:00"},
            {"day": 3, "time": "12:00"},
            {"day": 4, "time": "19:00"},
            {"day": 5, "time": "22:00"},
            {"day": 6, "time": "08:00"},
            {"day": 7, "time": "12:00"},
          ],
        },
      ],
      scheduleList: [],
      now: new Date(),
    }
  },
  mounted () {
    this.scheduleList = [];
    this.now = new Date();
    for (let i = 0; i < this.events.length; i++) {
      const event = this.events[i];
      let tmpEventList = [];
      let jidx = 0;
      for (let j = 0; j < event.schedule.length; j++) {
        const tmpSchedule = event.schedule[j];
        if((this.now.getDay%7) == tmpSchedule.day) {
          jidx = j;
          break;
        }
      }
      for (let j = 0; j < event.schedule.length; j++) {
        const tmpSchedule = event.schedule[(jidx+j)%(event.schedule.length)];
        let schedule = new Date(`${this.now.getFullYear()}-${("00"+(this.now.getMonth()+1)).slice(-2)}-${("00"+this.now.getDate()).slice(-2)}T${tmpSchedule.time}:00`);
        // Add day and update time
        schedule = schedule.addDays(((tmpSchedule.day - this.now.getDay())+7)%7);
        schedule = schedule.setCatTime2(tmpSchedule.time);
        // Next week if schedule out of date
        if(schedule.getTime() < this.now.getTime()) {
          schedule = schedule.addDays(7);
        }

        let eventStartStr = schedule.toISOString().replace(/-/g, "").replace(".000", "").replace(/:/g, "");
        let eventEndStr = eventStartStr; // TODO
        let battledbLink = "https://battlecats-db.com/stage/s"+("00000" + event.id).slice(-5)+".html";
        let obj = {
          id: event.id,
          time: schedule,
          startTime: `${schedule.getFullYear()}/${schedule.getMonth()+1}/${schedule.getDate()} ${tmpSchedule.time}`,
          startLink: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=貓戰-${event.name}&dates=${eventStartStr}/${eventEndStr}&details=${battledbLink}`,
          list: [],
        }

        for (let m = 1; m <= event.max; m++) {
          let eventTime = schedule.addMinutes((event.value * m * -1 / 2));
          let eventTimeStr = eventTime.toISOString().replace(/-/g, "").replace(".000", "").replace(/:/g, "");
          let tmpEvent = {
            time: "",
            link: "",
          };
          tmpEvent.time = `${eventTime.getHours()}:${("00" + eventTime.getMinutes()).slice(-2)}`
          tmpEvent.link = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=貓戰儲存體力-${event.name}&dates=${eventTimeStr}/${eventTimeStr}&details=${battledbLink}`
          obj.list.push(tmpEvent);
        }

        tmpEventList.push(obj);
      }

      tmpEventList.sort(function(a, b) {
        return a.time.getTime() - b.time.getTime();
      });

      for (let j = 0; j < tmpEventList.length; j++) {
        let obj = tmpEventList[j];
        let battledbLink = "https://battlecats-db.com/stage/s"+("00000" + event.id).slice(-5)+".html";
        if(j == 0) {
          obj.title = true;
          obj.name = event.name;
          obj.count = event.schedule.length;
          obj.nameLink = battledbLink;
        }
        this.scheduleList.push(obj);
      }

    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

table {
  border-collapse: collapse;
}
table td, table th {
  border: 1px solid #000;
  padding: 4px;
}
</style>
