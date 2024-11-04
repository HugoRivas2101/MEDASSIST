import React from 'react';
import { FaHome, FaCalendarAlt, FaUserFriends, FaRobot, FaComments, FaUser } from 'react-icons/fa';

export default function Agenda() {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar Navigation */}
      <div className="w-1/5 bg-card p-4">
        <h1 className="text-lg font-bold mb-4">MedAssist</h1>
        <nav className="mt-4">
          <ul>
            <li className="flex items-center py-2 text-muted-foreground">
              <FaHome className="mr-2" /> <a href="#">Inicio</a>
            </li>
            <li className="flex items-center py-2 text-muted-foreground">
              <FaCalendarAlt className="mr-2" /> <a href="#">Mi Agenda</a>
            </li>
            <li className="flex items-center py-2 text-muted-foreground">
              <FaUserFriends className="mr-2" /> <a href="#">Pacientes</a>
            </li>
            <li className="flex items-center py-2 text-muted-foreground">
              <FaRobot className="mr-2" /> <a href="#">MedAI</a>
            </li>
            <li className="flex items-center py-2 text-muted-foreground">
              <FaComments className="mr-2" /> <a href="#">Chat</a>
            </li>
            <li className="flex items-center py-2 text-muted-foreground">
              <FaUser className="mr-2" /> <a href="#">Perfil</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Calendar Section */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">Calendar</h2>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLima&bgcolor=%23ffffff&src=cWs3bmllamtwdmw0bjJpMHN0dXFmZ3Zwbm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Y19lMzBhNzU4OTkyNmYxYTk5OGM0ZWE1ODlmYjZkMWI3NTE5ODBiZTc5MjVhNjdkOTAyNmVjODBmMzJkYWU5M2MyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19lODEzYTRmZDk1NzQ0OGViNjg4YjJmODZkODc4ZDE0MDZkZDQwYjAwZGU1YTIzNjJkZDE2M2U1NDQ2MTY1YmZhQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y181YjNkY2U0ZWQ1OTk5MjNmNTUyY2NlYTIyZDEwNjYzZmVhZjc2NzY5YjZlZWMyNzliMGIzZWE3YWY0MjJiMTFlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y240NWFybGNidW91YjB0dnEyam43bzJqNTRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZXMucGUjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&src=N2loNDdzN2ZzZGttMXZvNTloYm1nMG81cjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Mm9paWg0aWFoNjR0Z2xpcm11bTlpY2Y1Z2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=NW1hYjJnbGhvdjgyMXZpMWRsYWpmcHBtZzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Zm1tbWluY2JvbWpsZnI1cmd1ZDZkaHBhZGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%2375aab4&color=%23c30d00&color=%23ccb700&color=%230096aa&color=%23cc7a00&color=%2333B679&color=%230B8043&color=%234caf50&color=%2300b2a6&color=%239E69AF&color=%23b3b3c8"
          style={{ border: 'solid 1px #777' }}
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
}
